'use client';

import React from 'react';
import { useScript } from "@uidotdev/usehooks";

type CodePenProps = {
  id: string;
  title: string;
};

const CodePen = ({ id, title }: CodePenProps) => {
  useScript(
    'https://static.codepen.io/assets/embed/ei.js',
  );

  return (
    <p
      className="codepen"
      data-height="265"
      data-theme-id="dark"
      data-default-tab="html,result"
      data-user="manchestercodes"
      data-slug-hash={id}
      style={{
        height: 265,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid',
        margin: '1em 0',
        padding: '1em',
      }}
      data-pen-title={title}
    >
      <span>
        See the Pen <a href={`https://codepen.io/manchestercodes/pen/${id}`}>{title}</a> by Command Shift (
        <a href="https://codepen.io/manchestercodes">@manchestercodes</a>) on <a href="https://codepen.io">CodePen</a>.
      </span>
    </p>
  );
};

export default CodePen;