 import React  from 'react';
import {Button} from 'antd-mobile';

 const Info = (props) => {
   return (
     <div>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis risus ut tellus faucibus venenatis. Fusce gravida aliquam metus sed vulputate. Aenean elit urna, porta sed porta non, vulputate nec mi. Phasellus ut consequat tellus. Morbi maximus luctus finibus. Fusce eget efficitur felis, at iaculis ex. Vivamus a nulla ut ligula convallis blandit. Ut non faucibus orci. Curabitur dapibus varius turpis nec elementum. Vestibulum sit amet lorem et quam congue aliquet. Cras scelerisque ex sit amet justo auctor convallis. Cras maximus molestie justo sed auctor. Nullam pellentesque tortor velit, ut imperdiet nunc sodales vitae. Quisque id placerat nisl.

      Nulla molestie, ligula mollis tempor vulputate, dolor eros iaculis orci, quis finibus mauris est eu nulla. Aliquam iaculis sapien quam, sit amet iaculis leo blandit id. Cras nunc augue, maximus et augue vitae, convallis consectetur justo. Fusce posuere egestas tortor. Donec pulvinar risus non sem viverra venenatis. Pellentesque mi orci, rutrum nec elit vitae, tristique luctus ante. Sed placerat purus in nunc pulvinar dapibus. Pellentesque congue convallis leo, id interdum tortor auctor nec. Sed id odio nec nisl congue aliquet. Mauris sagittis mauris vitae velit congue congue. Cras porttitor elementum libero vitae cursus. Suspendisse nec diam sed felis bibendum egestas.

      Ut a orci risus. Vivamus euismod enim vitae malesuada ullamcorper. Integer fringilla ex at consectetur luctus. Vivamus pretium iaculis dolor et porttitor. Nunc non odio dui. Suspendisse semper nisi sed aliquet commodo. Nullam tincidunt ante ut sem suscipit, sed feugiat tortor viverra. Nam venenatis cursus diam, id feugiat eros ultricies id. Sed tellus ante, porta a commodo vel, fermentum sit amet mauris. Nulla finibus mi sed nulla accumsan ultrices. Donec id ex pellentesque, dapibus dui ut, consectetur purus. Ut neque risus, mollis ut enim eu, egestas egestas nulla. Vestibulum rhoncus venenatis gravida.

      Etiam sed augue faucibus, congue felis at, condimentum odio. Aliquam malesuada nulla suscipit, ornare enim vel, iaculis turpis. Nullam dapibus, sapien sed lobortis posuere, mauris nisl tincidunt elit, non pellentesque diam libero at est. Morbi ultrices venenatis augue, maximus vestibulum massa malesuada et. Quisque vitae viverra nisi, quis maximus odio. Nunc lobortis nisi nisl, et fringilla risus luctus eget. Integer vel vulputate eros. Nullam dapibus ipsum ac sapien bibendum, ut sagittis justo gravida. Nullam feugiat nulla tellus, et imperdiet enim placerat sit amet.

      Integer vulputate nibh blandit odio lacinia ultricies. Ut posuere ipsum eu imperdiet hendrerit. Quisque placerat quis augue non porttitor. Ut condimentum volutpat erat, a vehicula mauris laoreet vel. Praesent pulvinar a sem eget eleifend. Sed sollicitudin bibendum tempor. Curabitur dictum lacus ac sapien efficitur dapibus. Sed dignissim semper scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ut libero tempor, egestas orci eget, blandit lorem. Donec elementum est arcu, sit amet sollicitudin odio mattis ut. Pellentesque placerat, est ac vehicula finibus, urna nunc tempus turpis, non elementum nisl nisi nec ex. Phasellus sit amet mi libero. In congue ante sit amet mi lacinia, sed fringilla mi pulvinar. Nullam quis magna suscipit, vulputate augue sed, pellentesque massa. Aliquam elementum bibendum rutrum.
        <Button onClick={(e) => props.onBackButtonClicked(e) }>
          Go back
        </Button>
     </div>
   )
 }

export default Info;
