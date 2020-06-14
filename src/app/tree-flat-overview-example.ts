import { FlatTreeControl } from "@angular/cdk/tree";
import { Component, OnInit, AfterViewInit } from '@angular/core';

import {
  MatTreeFlatDataSource,
  MatTreeFlattener
} from "@angular/material/tree";

import { JsonService } from './json-service';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
  name: string;
  popup_code?: string;
  option_type?:string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
   "name": "What feature was off quality",
   "option_type": "Question",
   "children": [
      {
         "name": "Mixing",
         "popup_code": "10",
         "option_type": "opt",
         "children": [
            {
               "name": "What was the quality problem?",
               "option_type": "Question",
               "children": [
                  {
                     "name": "Off Color",
                     "popup_code": "10",
                     "option_type": "opt",
                     "children": [
                        {
                           "name": "What was the root cause of off-quality (why-why-why-why-why)",
                           "option_type": "Question",
                           "popup_code": "10",
                           "children": [
                              {
                                 "name": "Wrong tint was added",
                                 "popup_code": "101010"
                              },
                              {
                                 "name": "Not mixed adequatey",
                                 "popup_code": "101020"
                              },
                              {
                                 "name": "Please specify",
                                 "popup_code": "99"
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "name": "Odor",
                     "popup_code": "20",
                     "option_type": "opt",
                     "children": [
                        {
                           "name": "What was the root cause of off-quality (why-why-why-why-why)",
                           "option_type": "Question",
                           "popup_code": "10",
                           "children": [
                              {
                                 "name": "Wrong tint was added",
                                 "popup_code": "101010"
                              },
                              {
                                 "name": "Not mixed adequatey",
                                 "popup_code": "101020"
                              },
                              {
                                 "name": "Please specify",
                                 "popup_code": "99"
                              }
                           ]
                        }
                     ]
                  },
                   {
                     "name": "Formulation",
                     "popup_code": "20",
                     "option_type": "opt",
                     "children": [
                        {
                           "name": "What was the root cause of off-quality (why-why-why-why-why)",
                           "option_type": "Question",
                           "popup_code": "10",
                           "children": [
                              {
                                 "name": "Wrong tint was added",
                                 "popup_code": "101010"
                              },
                              {
                                 "name": "Not mixed adequatey",
                                 "popup_code": "101020"
                              },
                              {
                                 "name": "Please specify",
                                 "popup_code": "99"
                              }
                           ]
                        }
                     ]
                  }
               ]
            }
         ]
      },
      {
         "name": "Cookie",
         "popup_code": "20",
         "children": [
            {
               "name": "What was the quality problem?",
               "option_type": "Question"
            }
         ]
      },
      {
         "name": "Wrapper",
         "popup_code": "30",
         "children": [
            {
               "name": "What was the quality problem?",
               "option_type": "Question"
            }
         ]
      },
      {
         "name": "Cartons",
         "popup_code": "50",
         "children": [
            {
               "name": "What was the quality problem?",
               "option_type": "Question"
            }
         ]
      }
   ]
}
 
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  opttype: string;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: "tree-flat-overview-example",
  templateUrl: "tree-flat-overview-example.html",
  styleUrls: ["tree-flat-overview-example.css"]
})
export class TreeFlatOverviewExample implements AfterViewInit {

  
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      option_type: node.option_type
    };
  }

  selectedValue: String;


  testNode(node: any){
    //this.selectedValue = node.popup_code + '' +node.name;

   // console.log(node);
  }

 

  onKey(event: any) { // without type info
    this.selectedValue = "99-";
    this.selectedValue += event.target.value;
  }

  // treeControl = new FlatTreeControl<ExampleFlatNode>(
  //   node => node.level,
  //   node => node.expandable
  // );

  // treeFlattener = new MatTreeFlattener(
  //   this._transformer,
  //   node => node.level,
  //   node => node.expandable,
  //   node => node.children
  // );

  // dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  
  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

 constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;


 // hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

    expandNode() {
      //this.treeControl.expand(this.treeControl.dataNodes[0]);
    //this.treeControl.expand(this.treeControl.dataNodes[1]);
    
    //this.treeControl.expand(this.treeControl.dataNodes[2]);
    //this.treeControl.expand(this.treeControl.dataNodes[2]);
    //this.treeControl.expand(this.treeControl.dataNodes[1]);
  }


  ngAfterViewInit() {
    for (let i = 0; i < this.treeControl.dataNodes.length; i++) {

      if(this.treeControl.dataNodes[i]['option_type'] == 'Question'){
        this.treeControl.expand(this.treeControl.dataNodes[i]);
      }

      console.log(this.treeControl.dataNodes[i]);
      
      // if (this.treeControl.dataNodes[i].item == 'Fruits') {
      //   this.todoItemSelectionToggle(this.treeControl.dataNodes[i]);
      //   this.treeControl.expand(this.treeControl.dataNodes[i])
      // }
      // if (this.treeControl.dataNodes[i].item == 'Groceries') {
      //   this.treeControl.expand(this.treeControl.dataNodes[i])
      // }


    }
  }
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
