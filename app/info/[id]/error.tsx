'use client';

import React from 'react';

const ErrorMsg = ({ error }: { error: Error }) => {
  return <h2>{`Возникла ошибка ${error.message}`}</h2>;
};

export default ErrorMsg;
