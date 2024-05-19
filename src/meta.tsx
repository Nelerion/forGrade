import {Helmet} from "react-helmet";

interface Props {
    title:string
}
export default function Meta({title}:Props) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="Your Open Graph Description Your Open Graph Description Your Open Graph Description" />
      <meta property="og:title" content="Your Open Graph Title" />
      <meta property="og:description" content="Your Open Graph Description Your Open Graph Description Your Open Graph Description" />
      <meta property="og:image" content="url-to-your-image" />
    </Helmet>
  );
}
