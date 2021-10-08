import ReactRotatingText from 'react-rotating-text'
import './App.css';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Zoom from 'react-reveal/Zoom';
import '../src/App.css'

const Filler = () => {
    return (
        <Typography style={{color: 'white', marginTop: '23%', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar ante in libero dapibus pharetra. Mauris venenatis vestibulum sapien sed tincidunt. Aliquam erat volutpat. Aliquam condimentum eget erat non elementum. Nunc vel purus at dui rhoncus euismod eget in turpis. Suspendisse sem justo, porta vitae augue mollis, lobortis fermentum velit. Nunc eget turpis ut neque facilisis venenatis et a leo. Aenean semper euismod lorem, vel blandit diam interdum a. Mauris eu odio enim. Aenean at ultricies nunc.

Ut maximus leo dignissim, consectetur libero et, placerat enim. Curabitur luctus purus ac condimentum sollicitudin. Maecenas hendrerit volutpat ante, in commodo turpis malesuada pulvinar. In non sapien id velit maximus finibus vitae in magna. Nulla facilisi. Sed non dolor vitae est faucibus laoreet. Sed finibus, quam et elementum tincidunt, eros diam feugiat enim, et congue eros lorem vitae leo. Vestibulum mauris velit, malesuada in enim vel, feugiat euismod risus. Nunc vel dui aliquet, sollicitudin urna sed, aliquam erat. Maecenas vitae quam felis. Nullam volutpat cursus est, nec porta ex.

Mauris semper vestibulum erat, in malesuada leo. Integer nulla turpis, elementum vel dictum ac, volutpat et nulla. Proin non eleifend tellus. Nulla ac maximus odio. Mauris suscipit urna et dignissim ultrices. Duis varius rutrum ultrices. Suspendisse sit amet accumsan massa, et efficitur est. Donec sollicitudin urna quis nulla sollicitudin, non accumsan turpis sollicitudin. Donec tempor metus ut ultrices viverra. Ut mauris metus, faucibus et facilisis a, mattis ut dolor. Suspendisse blandit tellus leo, in tristique neque cursus vel. Suspendisse non tempor libero.

Praesent dapibus lacinia ex, eget faucibus ipsum tincidunt a. Ut tincidunt diam accumsan leo semper tincidunt. Suspendisse sed sem nulla. Nam nisi nulla, eleifend in fringilla non, consequat et ligula. Sed tempor leo et sapien feugiat cursus. Pellentesque lectus justo, ultrices sit amet nisi et, pretium sodales orci. Nam a lectus eu libero aliquet dictum sed dictum dolor. Donec sodales sodales sapien ut eleifend. Nullam et felis nec ipsum congue ultricies a sed sem. Proin quis dolor ut quam faucibus condimentum.

Etiam tincidunt hendrerit nulla in tincidunt. Vestibulum pharetra sit amet mi at ultricies. Nunc nec neque vel ipsum molestie vehicula. Nullam mattis augue at lorem lacinia egestas. Aliquam pulvinar, mauris non eleifend sodales, erat nisl pharetra arcu, sit amet tempus urna risus ultricies quam. Quisque placerat et leo quis ullamcorper. Aliquam erat volutpat. Pellentesque vestibulum dui ante, in imperdiet ante tempor quis. Aenean tempor, nisl nec semper aliquet, velit dui pulvinar nunc, eu cursus mi nulla eu nisi. Sed mollis neque in velit efficitur, sit amet vestibulum tortor facilisis. Nullam et dolor consequat, mollis velit ut, feugiat tortor. Morbi viverra enim nec diam imperdiet, a tempus mi pellentesque. Aliquam mauris libero, iaculis vitae sodales nec, suscipit a odio. Etiam est est, congue vitae condimentum ullamcorper, suscipit nec neque.

Ut maximus leo dignissim, consectetur libero et, placerat enim. Curabitur luctus purus ac condimentum sollicitudin. Maecenas hendrerit volutpat ante, in commodo turpis malesuada pulvinar. In non sapien id velit maximus finibus vitae in magna. Nulla facilisi. Sed non dolor vitae est faucibus laoreet. Sed finibus, quam et elementum tincidunt, eros diam feugiat enim, et congue eros lorem vitae leo. Vestibulum mauris velit, malesuada in enim vel, feugiat euismod risus. Nunc vel dui aliquet, sollicitudin urna sed, aliquam erat. Maecenas vitae quam felis. Nullam volutpat cursus est, nec porta ex.

Mauris semper vestibulum erat, in malesuada leo. Integer nulla turpis, elementum vel dictum ac, volutpat et nulla. Proin non eleifend tellus. Nulla ac maximus odio. Mauris suscipit urna et dignissim ultrices. Duis varius rutrum ultrices. Suspendisse sit amet accumsan massa, et efficitur est. Donec sollicitudin urna quis nulla sollicitudin, non accumsan turpis sollicitudin. Donec tempor metus ut ultrices viverra. Ut mauris metus, faucibus et facilisis a, mattis ut dolor. Suspendisse blandit tellus leo, in tristique neque cursus vel. Suspendisse non tempor libero.

Praesent dapibus lacinia ex, eget faucibus ipsum tincidunt a. Ut tincidunt diam accumsan leo semper tincidunt. Suspendisse sed sem nulla. Nam nisi nulla, eleifend in fringilla non, consequat et ligula. Sed tempor leo et sapien feugiat cursus. Pellentesque lectus justo, ultrices sit amet nisi et, pretium sodales orci. Nam a lectus eu libero aliquet dictum sed dictum dolor. Donec sodales sodales sapien ut eleifend. Nullam et felis nec ipsum congue ultricies a sed sem. Proin quis dolor ut quam faucibus condimentum.

Etiam tincidunt hendrerit nulla in tincidunt. Vestibulum pharetra sit amet mi at ultricies. Nunc nec neque vel ipsum molestie vehicula. Nullam mattis augue at lorem lacinia egestas. Aliquam pulvinar, mauris non eleifend sodales, erat nisl pharetra arcu, sit amet tempus urna risus ultricies quam. Quisque placerat et leo quis ullamcorper. Aliquam erat volutpat. Pellentesque vestibulum dui ante, in imperdiet ante tempor quis. Aenean tempor, nisl nec semper aliquet, velit dui pulvinar nunc, eu cursus mi nulla eu nisi. Sed mollis neque in velit efficitur, sit amet vestibulum tortor facilisis. Nullam et dolor consequat, mollis velit ut, feugiat tortor. Morbi viverra enim nec diam imperdiet, a tempus mi pellentesque. Aliquam mauris libero, iaculis vitae sodales nec, suscipit a odio. Etiam est est, congue vitae condimentum ullamcorper, suscipit nec neque.

Ut maximus leo dignissim, consectetur libero et, placerat enim. Curabitur luctus purus ac condimentum sollicitudin. Maecenas hendrerit volutpat ante, in commodo turpis malesuada pulvinar. In non sapien id velit maximus finibus vitae in magna. Nulla facilisi. Sed non dolor vitae est faucibus laoreet. Sed finibus, quam et elementum tincidunt, eros diam feugiat enim, et congue eros lorem vitae leo. Vestibulum mauris velit, malesuada in enim vel, feugiat euismod risus. Nunc vel dui aliquet, sollicitudin urna sed, aliquam erat. Maecenas vitae quam felis. Nullam volutpat cursus est, nec porta ex.

Mauris semper vestibulum erat, in malesuada leo. Integer nulla turpis, elementum vel dictum ac, volutpat et nulla. Proin non eleifend tellus. Nulla ac maximus odio. Mauris suscipit urna et dignissim ultrices. Duis varius rutrum ultrices. Suspendisse sit amet accumsan massa, et efficitur est. Donec sollicitudin urna quis nulla sollicitudin, non accumsan turpis sollicitudin. Donec tempor metus ut ultrices viverra. Ut mauris metus, faucibus et facilisis a, mattis ut dolor. Suspendisse blandit tellus leo, in tristique neque cursus vel. Suspendisse non tempor libero.

Praesent dapibus lacinia ex, eget faucibus ipsum tincidunt a. Ut tincidunt diam accumsan leo semper tincidunt. Suspendisse sed sem nulla. Nam nisi nulla, eleifend in fringilla non, consequat et ligula. Sed tempor leo et sapien feugiat cursus. Pellentesque lectus justo, ultrices sit amet nisi et, pretium sodales orci. Nam a lectus eu libero aliquet dictum sed dictum dolor. Donec sodales sodales sapien ut eleifend. Nullam et felis nec ipsum congue ultricies a sed sem. Proin quis dolor ut quam faucibus condimentum.

Etiam tincidunt hendrerit nulla in tincidunt. Vestibulum pharetra sit amet mi at ultricies. Nunc nec neque vel ipsum molestie vehicula. Nullam mattis augue at lorem lacinia egestas. Aliquam pulvinar, mauris non eleifend sodales, erat nisl pharetra arcu, sit amet tempus urna risus ultricies quam. Quisque placerat et leo quis ullamcorper. Aliquam erat volutpat. Pellentesque vestibulum dui ante, in imperdiet ante tempor quis. Aenean tempor, nisl nec semper aliquet, velit dui pulvinar nunc, eu cursus mi nulla eu nisi. Sed mollis neque in velit efficitur, sit amet vestibulum tortor facilisis. Nullam et dolor consequat, mollis velit ut, feugiat tortor. Morbi viverra enim nec diam imperdiet, a tempus mi pellentesque. Aliquam mauris libero, iaculis vitae sodales nec, suscipit a odio. Etiam est est, congue vitae condimentum ullamcorper, suscipit nec neque.

</Typography>
    )
    }
export default Filler;
