import { Button } from 'example-ui-lib';

export default function Dev() {
  return (
    <div>
      <Button onClick={() => console.log('clicked')}>Click me</Button>
    </div>
  );
}