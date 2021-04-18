import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/client';

import { useChallenges } from '../../hooks/ChallengesContext';

import Logo from '../../assets/icons/logo.svg';
import HomeIcon from '../../assets/icons/home.svg';
import AwardIcon from '../../assets/icons/award.svg';
import SignOut from '../../assets/icons/logout.svg';

import { Container, LinkSidebar } from './styles';

export const Sidebar = (): JSX.Element => {
  const { asPath, replace } = useRouter();

  const { '0': data } = useSession();

  const { user } = useChallenges();

  return (
    <Container>
      <Logo />

      <div>
        {(user || data) && (
          <Link href="/">
            <LinkSidebar isActive={asPath === '/'} title="Página principal">
              <HomeIcon />
            </LinkSidebar>
          </Link>
        )}

        <Link href="/leaderboard">
          <LinkSidebar
            isActive={asPath === '/leaderboard'}
            title="Classificação"
          >
            <AwardIcon />
          </LinkSidebar>
        </Link>
      </div>

      {(user || data) && (
        <button
          type="button"
          onClick={async () => {
            await signOut({
              redirect: false,
            });

            replace('/auth/login');
          }}
          aria-label="Sign Out"
          title="Sair"
        >
          <SignOut />
        </button>
      )}
    </Container>
  );
};
