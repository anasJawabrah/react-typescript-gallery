import React from 'react'
import { Image, Col } from 'antd';
import { GalleryGrid } from './GalleryGrid'
import { v4 as uuidv4 } from 'uuid';

export interface IImage {
  id: string;
  image:string;
  description?:string;
  color?:string;
}
export class GridImage implements IImage {
  id: string;
  image: string;
  color: string;
  description: string;
  constructor(id: string, image: string, description: string, color:string) {
    this.id = id;
    this.image = image;
    this.description = description;
    this.color = color;
  }
}

export interface GalleryProps {
  images: IImage[];
}

export const Gallery = ({ images }: GalleryProps) => {
  return (
    <GalleryGrid>
      <Image.PreviewGroup>
        { Boolean(images?.length) && images?.map((image: IImage) => {
          return (
            <Col key={ uuidv4() } sm={ { span: 10 } } md={ { span: 6 } } lg={ { span: 5 } } style={ { background: image.color}}>
              <Image
                alt={ image?.description }
                src={ image?.image}
              />
            </Col>
          )
        }) }

      </Image.PreviewGroup>
    </GalleryGrid>
  );
}