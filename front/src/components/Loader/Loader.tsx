import { LoaderStyles } from "./style"

interface LoaderProps {
  text: string;
}

export const Loader = ({ text} : LoaderProps) => {
  return (
    <LoaderStyles>
        <div className="loader">
            
        </div>
        <p>{text}...</p>
    </LoaderStyles>
  )
}
