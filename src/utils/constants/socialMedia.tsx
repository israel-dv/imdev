import { Instagram } from '@imdev/components/Icons/Instagram'
import { Twitter } from '@imdev/components/Icons/Twitter'
import { SocialMediaProps } from '../types/socialMedia.type'
import { Tiktok } from '@imdev/components/Icons/Tiktok'
import { Github } from '@imdev/components/Icons/Github'
import { Linkedin } from '@imdev/components/Icons/Linkedin'

export const SOCIAL_MEDIA: SocialMediaProps[] = [
  {
    url: 'https://twitter.com/israeldev_',
    icon: <Twitter />,
    socialName: 'twitter'
  },
  {
    url: 'https://www.instagram.com/israeldev_/',
    icon: <Instagram />,
    socialName: 'instagram'
  },
  {
    url: 'https://github.com/israel-dv',
    icon: <Github />,
    socialName: 'github'
  },
  {
    url: 'https://www.linkedin.com/in/israel-moreno/',
    icon: <Linkedin />,
    socialName: 'linkedin'
  }
]
