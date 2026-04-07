interface TitleProps {
  text: string;
  color: string;
}

const Title = ({ text, color }: TitleProps) => {
  return <h2 style={{ color }}>{text}</h2>;
};

export default Title;
