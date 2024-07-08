import Link from 'next/link';

import { FiGithub, FiLinkedin, FiYoutube, FiTwitter } from 'react-icons/fi';



const socials = [
    { icon : <FiGithub />, path: '' },
    { icon : <FiLinkedin />, path: '' },
    { icon : <FiYoutube />, path: '' },
    { icon : <FiTwitter />, path: '' },
];

interface SocialProps {
    containerStyles: string;
    iconStyles: string;
}

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            ))}
        </div>
    );
};


export default Social;