import { Audio } from 'react-loader-spinner';

const Loader = () => {
    return (
        <Audio
            height={80}
            width={80}
            radius={9}
            color="green"
            ariaLabel="Loading"
            visible={true} // or you can remove this line if you want it always visible
        />
    );
};

export default Loader;
