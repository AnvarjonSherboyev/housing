import ProportiesProvider from './proporties/index';


const RootContext = ({ children }) => {
    return <>
        <ProportiesProvider>
            {children}
        </ProportiesProvider>
    </>
}

export default RootContext;