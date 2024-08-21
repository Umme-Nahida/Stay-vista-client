/* eslint-disable react/prop-types */

const CategoriCart = ({title,icon:Icon}) => {

    return (
        <div className="flex items-center gap-x-2">
            <Icon className='text-2xl'></Icon>
            <div className="text-xl">
                {title}
            </div>
        </div>
    );
};

export default CategoriCart;