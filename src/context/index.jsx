import ProportiesProvider from './properties/index';


const RootContext = ({ children }) => {
    return <>
        <ProportiesProvider>
            {children}
        </ProportiesProvider>
    </>
}

export default RootContext;