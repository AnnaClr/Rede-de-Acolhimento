import Link from "next/link";

export default function FooterCol({ title, links }: { title: string; links: { href: string; text: string }[] }) {
    return (
        <div className="footer-col">
            <h4>{title}</h4>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href}>
                            {link.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
