import { Container, Content } from './styles'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Button from '../Button'

const Form = () => {
    const schema = yup.object().shape({
        name: yup
        .string()
        .required("Campo obrigatório!"),

        email: yup
        .string()
        .email("E-mail inválido!")
        .required("Campo obrigatório!"),

        subject: yup
        .string()
        .required("Campo obrigatório!"),

        message: yup
        .string()
        .required("Campo obrigatório")
    })

    const {register, handleSubmit, formState: {errors},} = useForm({resolver: yupResolver(schema)})

    const handleSendMessage = (data) => {
        console.log(data)
    }


    return (
        <Container onSubmit={handleSubmit(handleSendMessage)}>
            <Content>

                <div>
                    <input
                        {...register("name")}
                        placeholder="Nome"
                        type="text"
                        error={errors.name?.message}
                    />
                    <input
                        {...register("email")}
                        placeholder="E-mail"
                        type="text"
                        error={errors.email?.message}
                    />
                </div>
                <input
                    {...register("subject")}
                    placeholder="Assunto"
                    type="text"
                    error={errors.subject?.message}
                />
                <textarea
                    {...register("message")}
                    placeholder="Mensagem"
                    type="text"
                    error={errors.message?.message}
                />
                <Button type='submit'>Enviar</Button>
            </Content>
        </Container>
    )
}

export default Form