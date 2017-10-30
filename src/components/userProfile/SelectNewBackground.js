import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/navigation/check';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: '100%',
        height: 200,
        overflowY: 'auto',
    },
};

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const SelectNewBackground = ({images,handleBackgroundChanged}) => {
    const handleBackgroundChangedLocal = (src) => {
        handleBackgroundChanged(src);
    };
    return(
        <div style={styles.root}>
            <GridList
                cellHeight={200}
                style={styles.gridList}
            >
                {/*<Subheader>Seleccione el nuevo background</Subheader>*/}
                {images.map((img) => (
                    <GridTile
                        key={img}
                        //title={img}
                        //subtitle={<span>by <b>{tile.author}</b></span>}
                        //actionIcon={<IconButton ><StarBorder color="white" /></IconButton>}
                    >
                        <img onClick={()=>handleBackgroundChangedLocal(img)} style={{cursor:'pointer',width: 90, height:90}}  src={img}/>
                    </GridTile>
                ))}
            </GridList>
        </div>
    );
};




export default SelectNewBackground;