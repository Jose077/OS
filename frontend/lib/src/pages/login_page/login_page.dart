import 'package:flutter/material.dart';
import 'package:frontend/src/pages/login_page/widegts/form_widget.dart';

class LoginPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
       child: Container(
         padding: EdgeInsets.all(50),
         height: 500,
         decoration: BoxDecoration(
           color: Color(0xff054F77),
           borderRadius: BorderRadius.circular(12),
           
         ),
         child: Column(
           mainAxisAlignment: MainAxisAlignment.center,
           children: [
             Text("Cadastre-se", 
             style: TextStyle(
               color: Colors.white,
               fontSize: 25
               ),
              ),
             SizedBox(height: 50,),
             
             FormWidget(),
           ],
         ),
         )
    );
  }
}