# HTTPConnectionOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DnsResolution** | Pointer to [**DnsResolutionEnum**](DnsResolutionEnum.md) | DNS resolution policy: force IPv4 or both (IPv4 and IPv6) when connecting.  * &#x60;both&#x60; - Both * &#x60;force_ipv4&#x60; - Force IPv4 | [optional] [default to BOTH]
**TransportPolicy** | Pointer to [**TransportPolicyEnum**](TransportPolicyEnum.md) | Transport protocol policy: preserve current scheme, force HTTP, or force HTTPS.  * &#x60;preserve&#x60; - Preserve * &#x60;force_https&#x60; - Force HTTPS * &#x60;force_http&#x60; - Force HTTP | [optional] [default to PRESERVE]
**HttpVersionPolicy** | Pointer to [**HttpVersionPolicyEnum**](HttpVersionPolicyEnum.md) | Defines the HTTP version preference for outbound connections (e.g., HTTP/1.1).  * &#x60;http1_1&#x60; - HTTP/1.1 | [optional] [default to HTTP1_1]
**Host** | Pointer to **string** | Optional custom host used to override the default target hostname during connection. | [optional] [default to "${host}"]
**PathPrefix** | Pointer to **string** | Optional prefix to add to all request paths (e.g., &#39;/v1&#39;). | [optional] [default to ""]
**FollowingRedirect** | Pointer to **bool** | If true, automatically follows HTTP redirects from the target server. | [optional] [default to false]
**RealIpHeader** | Pointer to **string** | Header name used to forward the original client IP address. | [optional] [default to "X-Real-IP"]
**RealPortHeader** | Pointer to **string** | Header name used to forward the original client port. | [optional] [default to "X-Real-PORT"]

## Methods

### NewHTTPConnectionOptions

`func NewHTTPConnectionOptions() *HTTPConnectionOptions`

NewHTTPConnectionOptions instantiates a new HTTPConnectionOptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHTTPConnectionOptionsWithDefaults

`func NewHTTPConnectionOptionsWithDefaults() *HTTPConnectionOptions`

NewHTTPConnectionOptionsWithDefaults instantiates a new HTTPConnectionOptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDnsResolution

`func (o *HTTPConnectionOptions) GetDnsResolution() DnsResolutionEnum`

GetDnsResolution returns the DnsResolution field if non-nil, zero value otherwise.

### GetDnsResolutionOk

`func (o *HTTPConnectionOptions) GetDnsResolutionOk() (*DnsResolutionEnum, bool)`

GetDnsResolutionOk returns a tuple with the DnsResolution field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDnsResolution

`func (o *HTTPConnectionOptions) SetDnsResolution(v DnsResolutionEnum)`

SetDnsResolution sets DnsResolution field to given value.

### HasDnsResolution

`func (o *HTTPConnectionOptions) HasDnsResolution() bool`

HasDnsResolution returns a boolean if a field has been set.

### GetTransportPolicy

`func (o *HTTPConnectionOptions) GetTransportPolicy() TransportPolicyEnum`

GetTransportPolicy returns the TransportPolicy field if non-nil, zero value otherwise.

### GetTransportPolicyOk

`func (o *HTTPConnectionOptions) GetTransportPolicyOk() (*TransportPolicyEnum, bool)`

GetTransportPolicyOk returns a tuple with the TransportPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransportPolicy

`func (o *HTTPConnectionOptions) SetTransportPolicy(v TransportPolicyEnum)`

SetTransportPolicy sets TransportPolicy field to given value.

### HasTransportPolicy

`func (o *HTTPConnectionOptions) HasTransportPolicy() bool`

HasTransportPolicy returns a boolean if a field has been set.

### GetHttpVersionPolicy

`func (o *HTTPConnectionOptions) GetHttpVersionPolicy() HttpVersionPolicyEnum`

GetHttpVersionPolicy returns the HttpVersionPolicy field if non-nil, zero value otherwise.

### GetHttpVersionPolicyOk

`func (o *HTTPConnectionOptions) GetHttpVersionPolicyOk() (*HttpVersionPolicyEnum, bool)`

GetHttpVersionPolicyOk returns a tuple with the HttpVersionPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpVersionPolicy

`func (o *HTTPConnectionOptions) SetHttpVersionPolicy(v HttpVersionPolicyEnum)`

SetHttpVersionPolicy sets HttpVersionPolicy field to given value.

### HasHttpVersionPolicy

`func (o *HTTPConnectionOptions) HasHttpVersionPolicy() bool`

HasHttpVersionPolicy returns a boolean if a field has been set.

### GetHost

`func (o *HTTPConnectionOptions) GetHost() string`

GetHost returns the Host field if non-nil, zero value otherwise.

### GetHostOk

`func (o *HTTPConnectionOptions) GetHostOk() (*string, bool)`

GetHostOk returns a tuple with the Host field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHost

`func (o *HTTPConnectionOptions) SetHost(v string)`

SetHost sets Host field to given value.

### HasHost

`func (o *HTTPConnectionOptions) HasHost() bool`

HasHost returns a boolean if a field has been set.

### GetPathPrefix

`func (o *HTTPConnectionOptions) GetPathPrefix() string`

GetPathPrefix returns the PathPrefix field if non-nil, zero value otherwise.

### GetPathPrefixOk

`func (o *HTTPConnectionOptions) GetPathPrefixOk() (*string, bool)`

GetPathPrefixOk returns a tuple with the PathPrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPathPrefix

`func (o *HTTPConnectionOptions) SetPathPrefix(v string)`

SetPathPrefix sets PathPrefix field to given value.

### HasPathPrefix

`func (o *HTTPConnectionOptions) HasPathPrefix() bool`

HasPathPrefix returns a boolean if a field has been set.

### GetFollowingRedirect

`func (o *HTTPConnectionOptions) GetFollowingRedirect() bool`

GetFollowingRedirect returns the FollowingRedirect field if non-nil, zero value otherwise.

### GetFollowingRedirectOk

`func (o *HTTPConnectionOptions) GetFollowingRedirectOk() (*bool, bool)`

GetFollowingRedirectOk returns a tuple with the FollowingRedirect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFollowingRedirect

`func (o *HTTPConnectionOptions) SetFollowingRedirect(v bool)`

SetFollowingRedirect sets FollowingRedirect field to given value.

### HasFollowingRedirect

`func (o *HTTPConnectionOptions) HasFollowingRedirect() bool`

HasFollowingRedirect returns a boolean if a field has been set.

### GetRealIpHeader

`func (o *HTTPConnectionOptions) GetRealIpHeader() string`

GetRealIpHeader returns the RealIpHeader field if non-nil, zero value otherwise.

### GetRealIpHeaderOk

`func (o *HTTPConnectionOptions) GetRealIpHeaderOk() (*string, bool)`

GetRealIpHeaderOk returns a tuple with the RealIpHeader field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRealIpHeader

`func (o *HTTPConnectionOptions) SetRealIpHeader(v string)`

SetRealIpHeader sets RealIpHeader field to given value.

### HasRealIpHeader

`func (o *HTTPConnectionOptions) HasRealIpHeader() bool`

HasRealIpHeader returns a boolean if a field has been set.

### GetRealPortHeader

`func (o *HTTPConnectionOptions) GetRealPortHeader() string`

GetRealPortHeader returns the RealPortHeader field if non-nil, zero value otherwise.

### GetRealPortHeaderOk

`func (o *HTTPConnectionOptions) GetRealPortHeaderOk() (*string, bool)`

GetRealPortHeaderOk returns a tuple with the RealPortHeader field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRealPortHeader

`func (o *HTTPConnectionOptions) SetRealPortHeader(v string)`

SetRealPortHeader sets RealPortHeader field to given value.

### HasRealPortHeader

`func (o *HTTPConnectionOptions) HasRealPortHeader() bool`

HasRealPortHeader returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


