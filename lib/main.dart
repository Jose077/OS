import 'package:flutter/material.dart';
import 'package:frontend/src/pages/login_page.dart';
import 'package:frontend/src/pages/register_client.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        // appBar: AppBar(
        //   title: Text("Ordem de serviço"),
        // ),
        // body: LoginPage(),
        body: RegisterClient(),
      ),
    );
  }
}
