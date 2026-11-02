import Link from "next/link";

export default function Card(props: {link: string, h3: string, p: string, span: string}) {
    return (
        <Link className="card feature-card" href={props.link}>
            <span className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z"/></svg></span>
            <h3>{props.h3}</h3>
            <p>{props.p}</p>
            <span className="card-link">{props.span}</span>
        </Link>
    );
}