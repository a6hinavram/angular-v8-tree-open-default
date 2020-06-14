 name: "What feature was off quality",
  option_type: "question",
  children: [
    {
      name: "Mixing",
      popup_code: "10",
      option_type: "opt",
      children: [
        {
          name: "What was the quality problem?",
          option_type: "question",
          children: [
            {
              name: "Off Color",
              popup_code: "10",
              option_type: "opt",
              children: [
                {
                  name: "What was the root cause of off-quality (why-why-why-why-why)",
                  option_type: "question",
                  popup_code: "10",
                  children: [
                    {
                      name: "Wrong tint was added",
                      popup_code: "101010",
                      
                    },
                    {
                      name: "Not mixed adequatey",
                      popup_code: "101020",
                      
                    },
                    {
                      name: "Please specify",
                      popup_code: "99",
                      
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },