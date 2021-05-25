import 'package:flutter/material.dart';

class RegisterClient extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
          appBar: AppBar(title: Text('Cadastro de Produto')),
          body: Column(
            children: [
              Container(
                child: Container(
                  width: 600,
                  child: Column(
                    children: <Widget>[
                      Image.asset(
                        'imagens/logo.png',
                      ),
                      Image.network(
                          'https://www.infovarejo.com.br/novo/wp-content/uploads/2016/12/O-Cadastro-de-Produtos-como-um-diferencial-competitivo-2-1-1024x773.png'),
                      SizedBox(
                        height: 255,
                      ),
                      //Titulo do formulário
                      Container(
                          child: Text(
                        'Cadastre um Produto',
                        style: TextStyle(
                          fontSize: 35,
                        ),
                      )),
                      Padding(padding: const EdgeInsets.only(top: 50.0)),
                      //Primeiro input para digitar o nome do produto
                      TextField(
                        decoration: InputDecoration(
                          hintText: 'Nome do produto',
                          prefixIcon: Icon(Icons.done),
                        ),
                      ),
                      //espaçamento entre os campos
                      SizedBox(
                        height: 25,
                      ),
                      //Segundo input para cadastrar o produto
                      TextField(
                        decoration: InputDecoration(
                            hintText: 'Preço R\$',
                            prefixIcon: Icon(Icons.monetization_on_outlined)),
                      ),
                      SizedBox(
                        height: 25,
                      ),
                      // Linha com botões
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          //Botão para cadastrar o produto
                          RaisedButton(
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(15.0),
                            ),
                            textColor: Colors.white,
                            color: Colors.blue,
                            child: new Text("Cadastrar"),
                            padding: const EdgeInsets.all(25.0),
                            onPressed: () {
                              //Função para cadastrar o cadastro
                            },
                          ),
                          SizedBox(
                            width: 25,
                          ),
                          //Botão para cnacelar o cadastro
                          RaisedButton(
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(15.0),
                            ),
                            textColor: Colors.white,
                            color: Colors.red,
                            child: new Text("Cancelar"),
                            padding: const EdgeInsets.all(25.0),
                            onPressed: () {
                              //Função para cancelar o cadastro
                            },
                          ),
                        ],
                      ),

                      //Lista com produtos cadastrados
                      Column(),
                    ],
                  ),
                ),
              ),
            ],
          )),
    );
  }
}
