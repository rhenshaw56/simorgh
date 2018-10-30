import React from 'react';
import { bool, objectOf, arrayOf, func, shape, string, any } from 'prop-types';
import nanoid from 'nanoid';
import styled from 'styled-components';
import { gridItemStyles } from '../../lib/layoutGrid';

// Inlined as this is a temporary component
const BlockString = props => {
  const stringProps = JSON.stringify(props);
  return <p>{stringProps}</p>;
};

const Item = styled.div`
  ${gridItemStyles};
`;

const Blocks = ({ blocks, componentsToRender, isTopLevel }) =>
  blocks.map((block, index) => {
    const { type, model } = block;

    const { type: typeOfPreviousBlock } = blocks[index - 1] || {};

    const Block = componentsToRender[type] || BlockString;
    if (isTopLevel) {
      return (
        <Item>
          <Block
            key={nanoid()}
            type={type}
            typeOfPreviousBlock={typeOfPreviousBlock}
            {...model}
          />
        </Item>
      );
    }
    return (
      <Block
        key={nanoid()}
        type={type}
        typeOfPreviousBlock={typeOfPreviousBlock}
        {...model}
      />
    );
  });

Blocks.propTypes = {
  blocks: arrayOf(
    shape({
      type: string.isRequired,
      model: objectOf(any).isRequired,
    }),
  ).isRequired,
  componentsToRender: objectOf(func).isRequired,
  isTopLevel: bool,
};

Blocks.defaultPropTypes = {
  isTopLevel: false,
};

export default Blocks;
