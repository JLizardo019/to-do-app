import SignIn from './SignIn';
import AppTheme from '../../shared-theme/AppTheme';

export default async function Page() {
    return(
        <>
    <AppTheme>
        <main>
            <SignIn></SignIn>
        </main>
        </AppTheme>
        </>);
}