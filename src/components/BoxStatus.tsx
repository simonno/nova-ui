import React from 'react';
import Box from "@material-ui/core/Box";
import {green, red} from "@material-ui/core/colors";
import {Status} from "../models/status";
import {Card, CardContent, CardHeader} from "@material-ui/core";

interface Params {
    displayName: string,
    status: Status,
    operationsCount: number,
}


export const BoxStatus = ({displayName,status, operationsCount}: Params) => (
    <Box bgcolor={status ? green : red}>
        <Card style={{background: "inherit"}}>
            <CardHeader>

            </CardHeader>
            <CardContent>
                {displayName}
            </CardContent>
        </Card>
    </Box>
);
