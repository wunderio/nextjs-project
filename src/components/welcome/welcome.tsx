export interface Properties {
  showCarrot?: boolean;
}

function Welcome({ showCarrot }: Properties): JSX.Element {
  return (
    <p>
      Welcome to Next.js! askldj
      {showCarrot && " 🥕asdfkljsadfhjk"}
    </p>
  );
}

export default Welcome;
