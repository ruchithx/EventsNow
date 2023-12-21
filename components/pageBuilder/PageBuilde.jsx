import { Editor, Frame, Element } from "@craftjs/core";
import Toolbox from "./Toolbox";
import Button from "./Button";
import Text from "./Text";
import { Container } from "@material-ui/core";
import Image from "next/image";

function pageBuilde() {
  return (
    <div>
      <Editor resolver={{ Button, Text, Container, Image }}>
        <div className="flex">
          <Frame>
            <Element is={Container} canvas>
              <Image
                src="/ReUsableComponentData/411895987_122127014264056430_4489410343690765412_n.jpg"
                alt="photo"
                width={600}
                height={200}
              />
              <Button>click me 1</Button>
              <Button>click me 1</Button>
              <Button>click me 1</Button>
              <Button>click me 1</Button>
              <Text text="hello world 1" />
              <Text text="hello world 2" />
              <Text text="hello world 3" id="1" />
              <Element is={Container} canvas>
                <Text text="hello world 4" />
                <Text text="hello world 5" />
              </Element>
            </Element>
          </Frame>
          <Toolbox />
        </div>
      </Editor>
    </div>
  );
}

export default pageBuilde;
