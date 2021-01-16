import React from 'react'
import { Container, FormButton, FormCentent, FormH1, FormLabel, FormWrap, FornInput, Text , Icon, Form} from './SiginElements'

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/" >Dolla</Icon>
                    <FormCentent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FornInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FornInput type='password' required />
                            <FormButton type="submit">Continue</FormButton>
                            <Text>Forgrt Password</Text>
                        </Form>
                    </FormCentent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
