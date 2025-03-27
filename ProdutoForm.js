import React, {useState} from 'react';
                         import { Text, View, TextInput, TouchableOpacity }
                                from 'react-native';
                         import { Produto } from './dados/Produto';
                         import GestorDados from './dados/GestorDados';
                         import { styles } from './CommonStyles';

                         export default function ProdutoForm( { navigation } ) {
                           const gestor = new GestorDados();
                           const[codigo,setCodigo] = useState('');
                           const[nome,setNome] = useState('');
                           const[pedidos,setPedidos] = useState('');
                           const[numero,setNumero] = useState('');
                           const salvar = () => {
                             prodAux =
                                 new Produto(parseInt(codigo),nome,pedidos,numero);
                             gestor.adicionar(prodAux).then(
                                 navigation.navigate('ListaProd'));
                           }

                           return (
                             <View style={styles.inputContainer}>
                               <TextInput style={styles.input} placeholder='Codigo'
                                 keyboardType={'numeric'} value={codigo}
                                 onChangeText={setCodigo}/>
                               <TextInput style={styles.input} placeholder='Nome'
                                 value={nome} onChangeText={setNome}/>
                               <TextInput style={styles.input} placeholder='Pedidos'
                                 value={pedidos}
                                 onChangeText={setPedidos}/>
                               <TextInput style={styles.input} placeholder='Telefone'
                                 keyboardType={'numeric'} value={numero}
                                 onChangeText={setNumero}/>

                               <TouchableOpacity style={styles.button} onPress={salvar}>
                                   <Text style={styles.buttonTextBig}>Salvar</Text>
                               </TouchableOpacity>
                             </View>
                           );
                         }
                         