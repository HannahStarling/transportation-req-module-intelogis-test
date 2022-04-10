import { TransportationTable } from './Table/index';
import { Map } from './Map/index';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
import AppContainer from './AppContainer';

function App() {
  return (
    <AppContainer>
      <Splitter
        direction={SplitDirection.Horizontal}
        draggerClassName="custom-dragger-horizontal"
      >
        <TransportationTable />
        <Map />
      </Splitter>
    </AppContainer>
  );
}

export default App;
