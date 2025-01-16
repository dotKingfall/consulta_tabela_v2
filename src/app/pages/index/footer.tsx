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
      <li>
        <div className='referralsSection'>
          GOIÂNIA:
        </div>
        <div><a target='_blank' href='/pdf/iGOI.pdf'>Individual</a></div>
        <div><a target='_blank' href='/pdf/eGOI.pdf'>Empresarial</a></div>
      </li>
      <li>
        <div className='referralsSection'>
          ANÁPOLIS:
        </div>
        <div><a target='_blank' href='/pdf/iANA.pdf'>Individual</a></div>
        <div><a target='_blank' href='/pdf/eANA.pdf'>Empresarial</a></div>
      </li>
      <li>
        <div className='referralsSection'>
          BRASÍLIA:
        </div>
        <div><a target='_blank' href='/pdf/iBRA.pdf'>Individual</a></div>
        <div><a target='_blank' href='/pdf/eBRA.pdf'>Empresarial</a></div>
      </li>
    </footer>
  );
}