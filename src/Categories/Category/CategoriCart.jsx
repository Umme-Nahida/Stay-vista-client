/* eslint-disable react/prop-types */

const CategoriCart = ({title,icon:Icon}) => {

    return (
        <div className="flex flex-col items-center justify-center gap-1 border-b-2 text-slate-500 hover:text-neutral-800 transition cursor-pointer">
            <Icon className='text-xl'></Icon>
            <div className="text-lg">
                {title}
            </div>
        </div>
    );
};

export default CategoriCart;