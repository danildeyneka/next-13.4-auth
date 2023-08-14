import { FC } from 'react';

export const InputData: FC = () => {
  const generateCopyableText = (text: string) => {
    const copyData = () => {
      navigator.clipboard.writeText(text);
    };
    return (
      <i onClick={() => copyData()} style={{ cursor: 'pointer' }}>
        {text}
      </i>
    );
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: 22 }}>
      <div style={{ fontSize: 22 }}>Click to copy data</div>
      <div>
        <b>login: {generateCopyableText('kminchelle')}</b>
      </div>
      <div>
        <b>pass: {generateCopyableText('0lelplR')}</b>
      </div>
    </div>
  );
};
