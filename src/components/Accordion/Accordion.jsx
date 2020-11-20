import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Можно ли заказать отдельно мойку окон?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{textAlign:'justify'}}>
            <p>
              Конечно, мы занимаемся сезонной мойкой окон, а также моем окна
              после ремонта.
            </p>
            <p style={{paddingTop:10}}>
              Если заказывать сезонную мойку окон вместе с уборкой квартиры, то
              стоимость будет 110 грн 1 окно (130 на 140 см). Если заказывать
              отдельно только мойку окон, без уборки квариры – 160 грн 1 окно
              (130 на 140 см).
            </p>
            <p style={{paddingTop:10}}>
              Если у Вас большие панорамные окна, то клинер на месте визуально
              определит сколько стандартных окон входит в 1 большое, а менеджер
              соответственно просчитает стоимость.
            </p>
            <p style={{paddingTop:10}}>
              Стоимость мытья окон после ремонта – 130 грн за 1 кв.м. с двух
              сторон. Минимальная стоимость выезда для мытья окон после ремонта
              – 1500 грн.
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Можно ли заказать отдельно мойку окон?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{textAlign:'justify'}}>
            <p>
              Конечно, мы занимаемся сезонной мойкой окон, а также моем окна
              после ремонта.
            </p>
            <p style={{paddingTop:10}}>
              Если заказывать сезонную мойку окон вместе с уборкой квартиры, то
              стоимость будет 110 грн 1 окно (130 на 140 см). Если заказывать
              отдельно только мойку окон, без уборки квариры – 160 грн 1 окно
              (130 на 140 см).
            </p>
            <p style={{paddingTop:10}}>
              Если у Вас большие панорамные окна, то клинер на месте визуально
              определит сколько стандартных окон входит в 1 большое, а менеджер
              соответственно просчитает стоимость.
            </p>
            <p style={{paddingTop:10}}>
              Стоимость мытья окон после ремонта – 130 грн за 1 кв.м. с двух
              сторон. Минимальная стоимость выезда для мытья окон после ремонта
              – 1500 грн.
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Можно ли заказать отдельно мойку окон?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{textAlign:'justify'}}>
            <p>
              Конечно, мы занимаемся сезонной мойкой окон, а также моем окна
              после ремонта.
            </p>
            <p style={{paddingTop:10}}>
              Если заказывать сезонную мойку окон вместе с уборкой квартиры, то
              стоимость будет 110 грн 1 окно (130 на 140 см). Если заказывать
              отдельно только мойку окон, без уборки квариры – 160 грн 1 окно
              (130 на 140 см).
            </p>
            <p style={{paddingTop:10}}>
              Если у Вас большие панорамные окна, то клинер на месте визуально
              определит сколько стандартных окон входит в 1 большое, а менеджер
              соответственно просчитает стоимость.
            </p>
            <p style={{paddingTop:10}}>
              Стоимость мытья окон после ремонта – 130 грн за 1 кв.м. с двух
              сторон. Минимальная стоимость выезда для мытья окон после ремонта
              – 1500 грн.
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Можно ли заказать отдельно мойку окон?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{textAlign:'justify'}}>
            <p>
              Конечно, мы занимаемся сезонной мойкой окон, а также моем окна
              после ремонта.
            </p>
            <p style={{paddingTop:10}}>
              Если заказывать сезонную мойку окон вместе с уборкой квартиры, то
              стоимость будет 110 грн 1 окно (130 на 140 см). Если заказывать
              отдельно только мойку окон, без уборки квариры – 160 грн 1 окно
              (130 на 140 см).
            </p>
            <p style={{paddingTop:10}}>
              Если у Вас большие панорамные окна, то клинер на месте визуально
              определит сколько стандартных окон входит в 1 большое, а менеджер
              соответственно просчитает стоимость.
            </p>
            <p style={{paddingTop:10}}>
              Стоимость мытья окон после ремонта – 130 грн за 1 кв.м. с двух
              сторон. Минимальная стоимость выезда для мытья окон после ремонта
              – 1500 грн.
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Можно ли заказать отдельно мойку окон?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{textAlign:'justify'}}>
            <p>
              Конечно, мы занимаемся сезонной мойкой окон, а также моем окна
              после ремонта.
            </p>
            <p style={{paddingTop:10}}>
              Если заказывать сезонную мойку окон вместе с уборкой квартиры, то
              стоимость будет 110 грн 1 окно (130 на 140 см). Если заказывать
              отдельно только мойку окон, без уборки квариры – 160 грн 1 окно
              (130 на 140 см).
            </p>
            <p style={{paddingTop:10}}>
              Если у Вас большие панорамные окна, то клинер на месте визуально
              определит сколько стандартных окон входит в 1 большое, а менеджер
              соответственно просчитает стоимость.
            </p>
            <p style={{paddingTop:10}}>
              Стоимость мытья окон после ремонта – 130 грн за 1 кв.м. с двух
              сторон. Минимальная стоимость выезда для мытья окон после ремонта
              – 1500 грн.
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Можно ли заказать отдельно мойку окон?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{textAlign:'justify'}}>
            <p>
              Конечно, мы занимаемся сезонной мойкой окон, а также моем окна
              после ремонта.
            </p>
            <p style={{paddingTop:10}}>
              Если заказывать сезонную мойку окон вместе с уборкой квартиры, то
              стоимость будет 110 грн 1 окно (130 на 140 см). Если заказывать
              отдельно только мойку окон, без уборки квариры – 160 грн 1 окно
              (130 на 140 см).
            </p>
            <p style={{paddingTop:10}}>
              Если у Вас большие панорамные окна, то клинер на месте визуально
              определит сколько стандартных окон входит в 1 большое, а менеджер
              соответственно просчитает стоимость.
            </p>
            <p style={{paddingTop:10}}>
              Стоимость мытья окон после ремонта – 130 грн за 1 кв.м. с двух
              сторон. Минимальная стоимость выезда для мытья окон после ремонта
              – 1500 грн.
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
  );
}
