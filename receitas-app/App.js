import React, { useState } from 'react';
import { 
  Text, 
  View, 
  Button, 
  StyleSheet, 
  Modal, 
  ScrollView, 
  TouchableOpacity, 
  TextInput, 
  Alert 
} from 'react-native';

export default function App() {
  // Lista inicial de receitas para demonstração
  const [receitas, setReceitas] = useState([
    {
      id: '1',
      nome: '🥞 Panqueca Americana',
      ingredientes: '• 1 xícara de farinha de trigo\n• 2 colheres (sopa) de açúcar\n• 2 colheres (chá) de fermento em pó\n• 1 ovo batido\n• 1 xícara de leite\n• 2 colheres (sopa) de manteiga derretida',
      preparo: '1. Misture os ingredientes secos em um recipiente e os líquidos em outro.\n2. Junte as duas misturas e mexa delicadamente até homogeneizar.\n3. Aqueça uma frigideira antiaderente com um pouco de manteiga.\n4. Despeje uma concha de massa e cozinhe em fogo médio até dourar os dois lados.'
    }
  ]);

  // Estados para controlar a exibição dos modais
  const [modalVisualizarVisivel, setModalVisualizarVisivel] = useState(false);
  const [modalCadastroVisivel, setModalCadastroVisivel] = useState(false);

  // Estado para armazenar a receita selecionada para visualização
  const [receitaSelecionada, setReceitaSelecionada] = useState(null);

  // Estados para os campos do formulário de cadastro
  const [nomeInput, setNomeInput] = useState('');
  const [ingredientesInput, setIngredientesInput] = useState('');
  const [preparoInput, setPreparoInput] = useState('');

  // Função para abrir o visualizador com a receita correta
  const abrirReceita = (receita) => {
    setReceitaSelecionada(receita);
    setModalVisualizarVisivel(true);
  };

  // Função para limpar os campos do formulário de cadastro
  const limparFormulario = () => {
    setNomeInput('');
    setIngredientesInput('');
    setPreparoInput('');
  };

  // Função para validar os campos e salvar a nova receita
  const salvarReceita = () => {
    if (!nomeInput.trim() || !ingredientesInput.trim() || !preparoInput.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }

    const novaReceita = {
      id: Math.random().toString(), // Gera um ID único simples
      nome: nomeInput,
      ingredientes: ingredientesInput,
      preparo: preparoInput
    };

    setReceitas([...receitas, novaReceita]);
    Alert.alert('Sucesso', 'Receita cadastrada com sucesso!');
    limparFormulario();
    setModalCadastroVisivel(false);
  };

  // Função para cancelar o cadastro de forma limpa
  const cancelarCadastro = () => {
    limparFormulario();
    setModalCadastroVisivel(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📱 App de Receitas</Text>
      <Text style={styles.subtitle}>Colecione suas receitas preferidas</Text>

      {/* Lista Dinâmica de Receitas na Tela Inicial */}
      <ScrollView style={styles.listaScroll} showsVerticalScrollIndicator={false}>
        {receitas.map((item) => (
          <View key={item.id} style={styles.cardReceita}>
            <Text style={styles.cardNome}>{item.nome}</Text>
            <Button 
              title="Ver Receita" 
              onPress={() => abrirReceita(item)} 
              color="#5c4d3c"
            />
          </View>
        ))}
      </ScrollView>

      {/* 1º MODAL: Visualização de uma Receita */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisualizarVisivel}
        onRequestClose={() => setModalVisualizarVisivel(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {receitaSelecionada && (
              <>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <Text style={styles.recipeTitle}>{receitaSelecionada.nome}</Text>
                  
                  <Text style={styles.sectionTitle}>Ingredientes:</Text>
                  <Text style={styles.recipeText}>{receitaSelecionada.ingredientes}</Text>

                  <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
                  <Text style={styles.recipeText}>{receitaSelecionada.preparo}</Text>
                </ScrollView>

                <View style={styles.buttonSpacing}>
                  <Button 
                    title="Fechar Visualização" 
                    onPress={() => setModalVisualizarVisivel(false)} 
                    color="#cc0000"
                  />
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>

      {/* 2º MODAL: Cadastro de Nova Receita */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalCadastroVisivel}
        onRequestClose={cancelarCadastro}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.recipeTitle}>Nova Receita</Text>
            
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.label}>Nome da Receita:</Text>
              <TextInput 
                style={styles.input}
                placeholder="Ex: Bolo de Chocolate"
                placeholderTextColor="#999"
                value={nomeInput}
                onChangeText={setNomeInput}
              />

              <Text style={styles.label}>Ingredientes:</Text>
              <TextInput 
                style={[styles.input, styles.inputMultiline]}
                placeholder="Insira os ingredientes (um por linha)..."
                placeholderTextColor="#999"
                multiline={true}
                numberOfLines={4}
                value={ingredientesInput}
                onChangeText={setIngredientesInput}
              />

              <Text style={styles.label}>Modo de Preparo:</Text>
              <TextInput 
                style={[styles.input, styles.inputMultiline]}
                placeholder="Passo 1, Passo 2..."
                placeholderTextColor="#999"
                multiline={true}
                numberOfLines={4}
                value={preparoInput}
                onChangeText={setPreparoInput}
              />
            </ScrollView>

            <View style={styles.formButtonsContainer}>
              <View style={styles.flexButton}>
                <Button title="Salvar" onPress={salvarReceita} color="#28a745" />
              </View>
              <View style={styles.flexButton}>
                <Button title="Cancelar" onPress={cancelarCadastro} color="#cc0000" />
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* Botão Flutuante (FAB) para abrir Cadastro */}
      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => setModalCadastroVisivel(true)}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#af997e",
    alignItems: "center"
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center"
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    color: "#3d3226"
  },
  listaScroll: {
    width: '90%',
    marginBottom: 20
  },
  cardReceita: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  cardNome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3d3226',
    marginBottom: 10
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)"
  },
  modalContent: {
    width: "85%",
    maxHeight: "85%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  recipeTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#5c4d3c",
    textAlign: "center"
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5,
    color: "#af997e"
  },
  recipeText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 4
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5c4d3c',
    marginTop: 10,
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    color: '#333'
  },
  inputMultiline: {
    textAlignVertical: 'top',
    minHeight: 80
  },
  buttonSpacing: {
    marginTop: 15
  },
  formButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 10
  },
  flexButton: {
    flex: 1
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#5c4d3c',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  fabText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: -3 
  }
});
