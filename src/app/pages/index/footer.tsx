'use client'

import './styling/footer.css'
import { Github } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Footer(){
  const { theme } = useTheme();

  return (
    <footer>
      <li>
        <div className="githubSection mt-3">
          <div className='myGithub'>
            <a rel='author' target='_blank' href='https://github.com/dotKingfall'>
              <Github className='githubborder' size={70} color={`${theme === 'light' ? 'var(--light-bg)' : 'var(--dark-highlight)'}`}></Github>
            </a>
          </div>
        </div>
      </li>
      <li>
        <div className='referralsSection'>
          INDIVIDUAL:
        </div>
      </li>
      <li>
        <div className='referralsSection'>
          EMPRESARIAL:
        </div>
      </li>
    </footer>
  );
}