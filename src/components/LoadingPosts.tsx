import React from 'react'
import { Col, Card, Skeleton } from 'antd';
import { GalleryGrid } from './GalleryGrid'
import { NUM_PER_PAGE } from '../config';
import { v4 as uuidv4 } from 'uuid';

const EMPTY_CARDS = Array(NUM_PER_PAGE).fill(0);

export const LoadingCard:React.FC= () => {
    return (
        <Card>
            <Skeleton.Image />
        </Card>
    );
}

export const LoadingPosts:React.FC = () => {
    return (
        <GalleryGrid>
            {EMPTY_CARDS.map((num) => {
                return (
                    <Col key={ uuidv4() } sm={ { span: 10 } } md={ { span: 6 } } lg={ { span: 5 } }>
                        <LoadingCard  />
                    </Col>
                )
            })}
        </GalleryGrid>
    );
}