import React, { useEffect, useState } from 'react'
import ReactSelect from 'react-select'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import api from '../../../services/api'
import { Container, Label, Input, ButtonStyles, LabelUpload } from './styles'
import { useForm, Controller } from "react-hook-form";
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '../../../components';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function NewProduct() {
  const [fileName, setFileName] = useState()
  const [categories, setCategories] = useState([])
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Escolha uma categoria'),
    file: Yup.mixed().test('required', 'Carregue um arquivo', value => {
      return value?.length > 0
    })
      .test('fileSize', 'Carregue um arquivo de até 2mb', value => {
        return value[0]?.size <= 200000
      })
      .test(
        'type',
        'Carregue arquivos JPEG ou PNG',
        (value) => value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png')
  })
  const { register, handleSubmit, control,
    formState: { errors } } = useForm({
      resolver: yupResolver(schema)
    })


  const onSubmit = async data => {
    const productDataFormData = new FormData()
    productDataFormData.append('name', data.name)
    productDataFormData.append('price', data.price)
    productDataFormData.append('category_id', data.category.id)
    productDataFormData.append('file', data.file[0])

    await toast.promise(api.post('products', productDataFormData), {
      pending: 'Criando um novo produto',
      succes: 'Produto criado com sucesso',
      error: 'Falha ao criar o produto'
    })

    setTimeout(() => {
      navigate('/listar-produtos');
    },3000)
  }





  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)

    }


    loadCategories()
  }, [])




  return (

    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome:</Label>
        <Input type="text" {...register('name')} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <Label>Preço:</Label>
        <Input type="number" {...register('price')} />
        <ErrorMessage>{errors.price?.message}</ErrorMessage>
        <LabelUpload>
          {fileName || (
            <>
              <DriveFolderUploadIcon />
              Carregue a imagem do produto
            </>

          )
          }

          <Input type="file"
            accept="image/png, image/jpeg"
            {...register('file')}
            onChange={value => {
              setFileName(value.target.files[0]?.name)
            }}

          />
        </LabelUpload>
        <ErrorMessage>{errors.file?.message}</ErrorMessage>
        <Controller
          name='category'
          control={control}
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                placeholder="Escolha a categoria"
              />
            )
          }}

        >



        </Controller>
        <ErrorMessage>{errors.category?.message}</ErrorMessage>
        <ButtonStyles>Adicionar Produtoss</ButtonStyles>
      </form>
    </Container>


  )
}
export default NewProduct


/*
Input

Não controlados: não são controlados por ninguém
Ex: um input que guarda o seu proprio valor. Auto-suficiente

Controlados: controlados por algum outro componente ou não auto-suficientes. 
Necessita guardar em uma variável.

*/