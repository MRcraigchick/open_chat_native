import { View, Text, TextInput } from 'react-native';
import { useEffect } from 'react';
import { Form, Input, validators } from '@/shared/form';
import { Button } from '@/shared/pressables';

export default function Login() {
  return (
    <View>
      <Form
        onSubmit={({ values }) => {
          console.log(values);
        }}
        defaultValues={{
          hello: '',
          firstname: '',
          lastname: '',
          email: '',
          password: '',
        }}>
        <View wrapper>
          <Input
            name='firstname'
            rules={validators.name}
          />
          <Input
            name='lastname'
            rules={validators.name}
          />
          <Input name='email' />
          <Input name='password' />
        </View>
        <Button
          submitter
          label='Submit'
        />
      </Form>
    </View>
  );
}
