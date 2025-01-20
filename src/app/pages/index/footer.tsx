'use client'

import './styling/footer.css'
import { Github, Linkedin } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Footer(){
  const { theme } = useTheme();

  return (
    <footer>
      <li>
        <div className="githubSection mt-3">
          <div className='mySocial'>
            <a rel='author' target='_blank' href='https://github.com/dotKingfall'>
              <Github size={60} color={`${theme === 'light' ? 'var(--light-bg)' : 'var(--dark-highlight)'}`}></Github>
            </a>
            <a rel='author' target='_blank' href='https://www.linkedin.com/in/ithalo-gomes'>
              <Linkedin className='socialborder' size={70} color={`${theme === 'light' ? 'var(--light-bg)' : 'var(--dark-highlight)'}`}></Linkedin>
            </a>
          </div>
        </div>
      </li>
      <div className='referrallAll'>
        <li>
          <div className='referralsSection'>
            GOIÂNIA:
          </div>
          <div><a target='_blank' rel='noopener' href='/pdf/iGOI.pdf'>Individual</a></div>
          <div><a target='_blank' rel='noopener' href='/pdf/eGOI.pdf'>Empresarial</a></div>
        </li>
        <li>
          <div className='referralsSection'>
            ANÁPOLIS:
          </div>
          <div><a target='_blank' rel='noopener' href='/pdf/iANA.pdf'>Individual</a></div>
          <div><a target='_blank' rel='noopener' href='/pdf/eANA.pdf'>Empresarial</a></div>
        </li>
        <li>
          <div className='referralsSection'>
            BRASÍLIA:
          </div>
          <div><a target='_blank' rel='noopener' href='/pdf/iBRA.pdf'>Individual</a></div>
          <div><a target='_blank' rel='noopener' href='/pdf/eBRA.pdf'>Empresarial</a></div>
        </li>
      </div>
      <div className='mobileReferralAll'>
        <li>
          <div className='mobileReferralsSection'>
            GO:
          </div>
          <div><a target='_blank' rel='noopener' href='/pdf/iGOI.pdf'>IND</a></div>
          <div><a target='_blank' rel='noopener' href='/pdf/eGOI.pdf'>EMP</a></div>
        </li>
        <li>
          <div className='mobileReferralsSection'>
            AN:
          </div>
          <div><a target='_blank' rel='noopener' href='/pdf/iANA.pdf'>IND</a></div>
          <div><a target='_blank' rel='noopener' href='/pdf/eANA.pdf'>EMP</a></div>
        </li>
        <li>
          <div className='mobileReferralsSection'>
            BR:
          </div>
          <div><a target='_blank' rel='noopener' href='/pdf/iBRA.pdf'>IND</a></div>
          <div><a target='_blank' rel='noopener' href='/pdf/eBRA.pdf'>EMP</a></div>
        </li>
      </div>
    </footer>
  );
}