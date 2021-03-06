import { Accounts } from 'meteor/accounts-base'

import { Actions } from '/api/actions/';
import { Emotions } from '/api/emotions/';
import { What } from '/api/what/';
import { Where } from '/api/where/';
import { Who } from '/api/who/';

Meteor.startup(() => {
    seed_actions();
    seed_emotions();
    seed_what();
    seed_where();
    seed_who();
});

function seed_actions(){
  //conversando sobre
  var exists = Actions.findBy('conversando sobre');
  if(!exists){
    Actions.insert({
      action: 'conversando sobre'
    });
  }

  //pensando sobre
  var exists = Actions.findBy('pensando sobre');
  if(!exists){
    Actions.insert({
      action: 'pensando sobre'
    });
  }

  //atuando
  var exists = Actions.findBy('atuando');
  if(!exists){
    Actions.insert({
      action: 'atuando'
    });
  }

  //assistindo
  var exists = Actions.findBy('assistindo');
  if(!exists){
    Actions.insert({
      action: 'assistindo'
    });
  }

  //escutando
  var exists = Actions.findBy('escutando');
  if(!exists){
    Actions.insert({
      action: 'escutando'
    });
  }

  //comendo
  var exists = Actions.findBy('comendo');
  if(!exists){
    Actions.insert({
      action: 'comendo'
    });
  }

  //bebendo
  var exists = Actions.findBy('bebendo');
  if(!exists){
    Actions.insert({
      action: 'bebendo'
    });
  }

  //jogando
  var exists = Actions.findBy('jogando');
  if(!exists){
    Actions.insert({
      action: 'jogando'
    });
  }

  //usando
  var exists = Actions.findBy('usando');
  if(!exists){
    Actions.insert({
      action: 'usando'
    });
  }

  //lendo
  var exists = Actions.findBy('lendo');
  if(!exists){
    Actions.insert({
      action: 'lendo'
    });
  }

  //praticando
  var exists = Actions.findBy('praticando');
  if(!exists){
    Actions.insert({
      action: 'praticando'
    });
  }
}

function seed_what(){
  //Is this Love
  var exists = What.findBy('Is this Love');
  if(!exists){
    var escutando = Actions.findBy('escutando');
    What.insert({
      action_id: escutando._id,
      what: 'Is this Love',
    });
  }
  //caminhando
  var exists = What.findBy('caminhando');
  if(!exists){
    var atuando = Actions.findBy('atuando');
    What.insert({
      action_id: atuando._id,
      what: 'caminhando'
    });
  }
  //dançando
  var exists = What.findBy('dançando');
  if(!exists){
    var atuando = Actions.findBy('atuando');
    What.insert({
      action_id: atuando._id,
      what: 'dançando'
    });
  }
}

function seed_emotions(){
  //amando
  var exists = Emotions.findBy('amando');
  if(!exists){
    Emotions.insert({
      emotion: 'amando'
    });
  }
  //irritado
  var exists = Emotions.findBy('irritado');
  if(!exists){
    Emotions.insert({
      emotion: 'irritado'
    });
  }
  //chorando
  var exists = Emotions.findBy('chorando');
  if(!exists){
    Emotions.insert({
      emotion: 'chorando'
    });
  }
  //rindo
  var exists = Emotions.findBy('rindo');
  if(!exists){
    Emotions.insert({
      emotion: 'rindo'
    });
  }
}

function seed_where(){
  //sala
  var exists = Where.findBy('sala');
  if(!exists){
    Where.insert({
      where: 'sala'
    });
  }
  //condomínio
  var exists = Where.findBy('condomínio');
  if(!exists){
    Where.insert({
      where: 'condomínio'
    });
  }
  //quarto
  var exists = Where.findBy('quarto');
  if(!exists){
    Where.insert({
      where: 'quarto'
    });
  }
}

function seed_who(){
  //sozinho
  var exists = Who.findBy('sozinho');
  if(!exists){
    Who.insert({
      name: 'sozinho'
    });
  }
}
