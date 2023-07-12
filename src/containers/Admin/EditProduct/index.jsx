import React, { useEffect, useState } from 'react'
import ReactSelect from 'react-select'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import api from '../../../services/api'
import { Container, Label, Input, ButtonStyles, LabelUpload,ContainerIput } from './styles'
import { useForm, Controller } from "react-hook-form";
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '../../../components';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

function EditProducts() {
  const [fileName, setFileName] = useState()
  const [categories, setCategories] = useState([])
  const navigate = useNavigate();
  const location = useLocation()
  const {
    state: { product }
  } = location
  console.log(location);
  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Escolha uma categoria'),
    offer:Yup.bool()


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
    productDataFormData.append('offer', data.offer)

    await toast.promise(api.put(`products/${product.id}`, productDataFormData), {
      pending: 'Editando um novo produto',
      succes: 'Produto editado com sucesso',
      error: 'Falha ao editar o produto'
    })

    setTimeout(() => {
      navigate('/listar-produtos');
    }, 1000)
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
        <Input type="text" {...register('name')} defaultValue={product.name} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <Label>Preço:</Label>
        <Input type="number" {...register('price')} defaultValue={product.price}/>
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
          defaultValue={product.category}
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                placeholder="Escolha a categoria"
                defaultValue={product.category}
              />
            )
          }}

        >



        </Controller>
        <ErrorMessage>{errors.category?.message}</ErrorMessage>


          <ContainerIput>
          <input type="checkbox" {...register('offer')} defaultChecked={product.offer} />
            <Label>Produto em oferta?</Label>
          </ContainerIput>
      


        <ButtonStyles>Editar Produtos</ButtonStyles>
      </form>
    </Container>


  )
}
export default EditProducts


/*
Input

Não controlados: não são controlados por ninguém
Ex: um input que guarda o seu proprio valor. Auto-suficiente

Controlados: controlados por algum outro componente ou não auto-suficientes. 
Necessita guardar em uma variável.

*/