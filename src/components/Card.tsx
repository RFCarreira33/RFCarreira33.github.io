interface CardProps {
  title: string;
  description: string;
  href: string;
  lang: string;
}

const Card = ({ title: title, description, href, lang }: CardProps) => (
  <div className="link-card hover:scale-105 ease-out transition-transform border-solid border-1 border-suttle rounded-md bg-foreground">
    <a href={href} className="block p-5">
      <h3 className="text-md">{title}</h3>
      <p className="py-2 text-sm">{description}</p>
      <p className="text-sm text-gray-400">Built with <b>{lang}</b></p>
    </a>
  </div>
)

export default Card;
