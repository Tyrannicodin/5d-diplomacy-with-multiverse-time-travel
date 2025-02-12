import { AxiosError } from 'axios';
import css from './error.module.scss'

type ErrorProps = {
  error: Error;
};

const Error = ({ error }: ErrorProps) => {
  const baseMessage = `${error?.name}: ${error?.message}`;
  const serverMessage = (error as AxiosError)?.response?.data as string | undefined;
  return (
    <div className={css.container}>
      <p>{baseMessage}</p>
      {serverMessage && <p>{serverMessage}</p>}
    </div>
  );
};

export default Error;
