/**
 * 网络请求文件
*/
class HttpRequest{
    public static http: HttpRequest;

    private baseUrl: String = '';
    
    public static get instance() {
        if (!this.http) {
            this.http = new HttpRequest();
        }
        return this.http;
    }

    private request({method = egret.HttpMethod.GET, url, params = {}, headers = {}}): Promise<any> {
        if (!(/http(|s):\/\//.test(url))) {
            url = this.baseUrl + url;
        }

        let mParam: any = '';
        let mHeader = {};
        mHeader['Content-Type'] = 'application/x-www-form-urlencoded';

        for (let key in headers) {
            mHeader[key] = headers[key];
        }

        if (mHeader['Content-Type'] === 'application/json') {
            mParam = JSON.stringify(params);
            mParam = mParam.replace(/\+/g, '%2B').replace(/\&/g, '%26');
        }else {
            for (let key in params) {
                mParam += `${key}=${('' + params[key]).replace(/\&/g, "%26")}&`
            }
            mParam = mParam.replace(/\+/g, "%2B")
            // console.log(_params)
            if (mParam.length > 0) {
                mParam = mParam.substring(0, mParam.length - 1)
            }
            if (method === egret.HttpMethod.GET) {
                url += `?${mParam}`
            }
        }
        return new Promise((resolve, reject) => {
            let request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            request.open(url, method);

            for (let key in mHeader) {
                request.setRequestHeader(key, mHeader[key]);
            }

            if (method === egret.HttpMethod.GET) {
                request.send();
            } else {
                request.send(mParam);
            }

            request.addEventListener(egret.Event.COMPLETE, (event) => {
                dealResult(event);
            }, this);

            request.addEventListener(egret.IOErrorEvent.IO_ERROR, (event) => {
                dealResult(event, false);
            }, this);

            function dealResult(event, success = true) {
                let response;

                try{
                    response = JSON.parse(request.response);
                } catch(e) {
                    response = request.response;
                }

                if (success) {
                    resolve(response);
                } else {
                    reject(response);
                }
            }
        });
    }

    /**
     * 设置一个通用的url头
    */
    public setBaseUrl(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    /**
     * GET请求
    */
    public get(url: string, params = {}, headers = {}): Promise<any> {
        return this.request({
            url: url,
            params: params,
            headers: headers
        });
    }

    /**
     * POST请求
    */
    public post(url: string, params = {}, headers = {}): Promise<any> {
        return this.request({
            url: url,
            method: egret.HttpMethod.POST,
            params: params,
            headers: headers
        });
    }
}