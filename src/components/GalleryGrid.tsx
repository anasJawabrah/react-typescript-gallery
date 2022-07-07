import React from 'react';
import { Row} from 'antd';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

export const GalleryGrid = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
  return (
    <Row  gutter={ [16, 24] } justify="center">
    {props.children}
    </Row>
  );
}