import React, {useContext} from 'react';
import SmurfContext from './context';
import SmurfCard from '../components/SmurfCard';


const Smurflist = () =>{

const {data} = useContext(SmurfContext);
    return(
        <div>
            {data.map(item => (
                <SmurfCard key={item.id} smurf= {item}/>
            ))}
        </div>
    );
};

export default Smurflist; 