import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import dynamic from 'next/dynamic';

import { User } from '../pages';

import challenges from '../../challenges.json';

import api from '../utils/api';

const LevelUpModal = dynamic(() => import('../components/LevelUpModal'));

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  user: User;
  experienceToNextLevel: number;
  activeChallenge: Challenge | null;
  levelUp: () => void;
  startNewChallenge: () => void;
  completeChallenge: () => void;
  resetChallenge: () => void;
  closeLevelUpModal: () => void;
}

interface ChallengesProviderProps {
  userData: User;
  children: ReactNode;
}

const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider = ({
  children,
  userData,
}: ChallengesProviderProps): JSX.Element => {
  const [user, setUser] = useState(userData);

  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(
    null
  );
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((user.level + 1) * 4, 2);

  const levelUp = useCallback(() => {
    setUser(state => {
      return {
        ...state,
        level: state.level + 1,
      };
    });
    setIsLevelUpModalOpen(true);

    new Audio('/level-up.mp3').play();
  }, []);

  const completeChallenge = useCallback(async () => {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    setActiveChallenge(null);

    let currentExperience = user.currentExperience + amount;

    if (currentExperience >= experienceToNextLevel) {
      levelUp();

      currentExperience -= experienceToNextLevel;
    }

    setUser(state => {
      return {
        ...state,
        currentExperience,
        completedChallenges: user.completedChallenges + 1,
      };
    });

    const { image } = user;

    await api.patch('/user/experience', {
      image,
      amountExperience: amount,
    });
  }, [activeChallenge]);

  const resetChallenge = useCallback(() => {
    setActiveChallenge(null);
  }, []);

  const startNewChallenge = useCallback(() => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex] as Challenge;

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio ✨', {
        body: `Valendo ${challenge.amount}xp!`,
      });
    }
  }, []);

  const closeLevelUpModal = useCallback(() => {
    setIsLevelUpModalOpen(false);
  }, []);

  return (
    <ChallengesContext.Provider
      value={{
        experienceToNextLevel,
        user,
        activeChallenge,
        levelUp,
        startNewChallenge,
        completeChallenge,
        resetChallenge,
        closeLevelUpModal,
      }}
    >
      {children}

      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
};

export function useChallenges(): ChallengesContextData {
  const context = useContext(ChallengesContext);

  if (!context) {
    throw new Error('useChallenges must be used within a ChallengesProvider');
  }

  return context;
}
