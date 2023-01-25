import { Story } from '@storybook/angular';
import { CustomButtonComponent } from './custom-button.component';

export default {
  title: 'Component/CustomButton',
  component: CustomButtonComponent,
};

const Template: Story<CustomButtonComponent> = (
  args: CustomButtonComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  buttonText: 'Primary Button',
  varient: 'primary',
};

export const Success = Template.bind({});
Success.args = {
  primary: false,
  varient: 'success',
  buttonText: 'Success Button',
};

export const Error = Template.bind({});
Error.args = {
  primary: false,
  varient: 'error',
  buttonText: 'Error Button',
};
