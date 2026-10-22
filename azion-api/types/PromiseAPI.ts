import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

import { AWS4HMAC } from '../models/AWS4HMAC';
import { AWS4HMACAttributes } from '../models/AWS4HMACAttributes';
import { AWS4HMACAttributesRequest } from '../models/AWS4HMACAttributesRequest';
import { AWS4HMACRequest } from '../models/AWS4HMACRequest';
import { AWS4HMACTypeEnum } from '../models/AWS4HMACTypeEnum';
import { AWSKinesisFirehoseEndpoint } from '../models/AWSKinesisFirehoseEndpoint';
import { AWSKinesisFirehoseEndpointAttributes } from '../models/AWSKinesisFirehoseEndpointAttributes';
import { AWSKinesisFirehoseEndpointAttributesRequest } from '../models/AWSKinesisFirehoseEndpointAttributesRequest';
import { AWSKinesisFirehoseEndpointAttributesTypeEnum } from '../models/AWSKinesisFirehoseEndpointAttributesTypeEnum';
import { AWSKinesisFirehoseEndpointRequest } from '../models/AWSKinesisFirehoseEndpointRequest';
import { Account } from '../models/Account';
import { AccountInfo } from '../models/AccountInfo';
import { AccountInfoRequest } from '../models/AccountInfoRequest';
import { AccountRequest } from '../models/AccountRequest';
import { Address } from '../models/Address';
import { AddressLoadBalancerModule } from '../models/AddressLoadBalancerModule';
import { AddressLoadBalancerModuleRequest } from '../models/AddressLoadBalancerModuleRequest';
import { AddressModules } from '../models/AddressModules';
import { AddressModulesRequest } from '../models/AddressModulesRequest';
import { AddressRequest } from '../models/AddressRequest';
import { AggregatedField } from '../models/AggregatedField';
import { AggregatedFieldRequest } from '../models/AggregatedFieldRequest';
import { AlgType } from '../models/AlgType';
import { Application } from '../models/Application';
import { ApplicationAcceleratorModule } from '../models/ApplicationAcceleratorModule';
import { ApplicationAcceleratorModuleRequest } from '../models/ApplicationAcceleratorModuleRequest';
import { ApplicationCriterionArgument } from '../models/ApplicationCriterionArgument';
import { ApplicationCriterionArgumentRequest } from '../models/ApplicationCriterionArgumentRequest';
import { ApplicationCriterionField } from '../models/ApplicationCriterionField';
import { ApplicationCriterionFieldRequest } from '../models/ApplicationCriterionFieldRequest';
import { ApplicationCriterionFieldVariableEnum } from '../models/ApplicationCriterionFieldVariableEnum';
import { ApplicationModules } from '../models/ApplicationModules';
import { ApplicationModulesRequest } from '../models/ApplicationModulesRequest';
import { ApplicationRequest } from '../models/ApplicationRequest';
import { ApplicationRequestPhaseRuleEngineOrder } from '../models/ApplicationRequestPhaseRuleEngineOrder';
import { ApplicationResponse } from '../models/ApplicationResponse';
import { ApplicationResponsePhaseRuleEngineOrderRequest } from '../models/ApplicationResponsePhaseRuleEngineOrderRequest';
import { AzureBlobStorageEndpoint } from '../models/AzureBlobStorageEndpoint';
import { AzureBlobStorageEndpointAttributes } from '../models/AzureBlobStorageEndpointAttributes';
import { AzureBlobStorageEndpointAttributesRequest } from '../models/AzureBlobStorageEndpointAttributesRequest';
import { AzureBlobStorageEndpointAttributesTypeEnum } from '../models/AzureBlobStorageEndpointAttributesTypeEnum';
import { AzureBlobStorageEndpointRequest } from '../models/AzureBlobStorageEndpointRequest';
import { AzureMonitorEndpoint } from '../models/AzureMonitorEndpoint';
import { AzureMonitorEndpointAttributes } from '../models/AzureMonitorEndpointAttributes';
import { AzureMonitorEndpointAttributesRequest } from '../models/AzureMonitorEndpointAttributesRequest';
import { AzureMonitorEndpointAttributesTypeEnum } from '../models/AzureMonitorEndpointAttributesTypeEnum';
import { AzureMonitorEndpointRequest } from '../models/AzureMonitorEndpointRequest';
import { BaseQuery } from '../models/BaseQuery';
import { BaseQueryRequest } from '../models/BaseQueryRequest';
import { BehaviorArgs } from '../models/BehaviorArgs';
import { BehaviorArgsAttributes } from '../models/BehaviorArgsAttributes';
import { BehaviorArgsAttributesValue } from '../models/BehaviorArgsAttributesValue';
import { BehaviorCapture } from '../models/BehaviorCapture';
import { BehaviorCaptureMatchGroupsAttributes } from '../models/BehaviorCaptureMatchGroupsAttributes';
import { BehaviorNoArgs } from '../models/BehaviorNoArgs';
import { BehaviorNoArgsTypeEnum } from '../models/BehaviorNoArgsTypeEnum';
import { BigQueryEndpoint } from '../models/BigQueryEndpoint';
import { BigQueryEndpointAttributes } from '../models/BigQueryEndpointAttributes';
import { BigQueryEndpointAttributesRequest } from '../models/BigQueryEndpointAttributesRequest';
import { BigQueryEndpointAttributesTypeEnum } from '../models/BigQueryEndpointAttributesTypeEnum';
import { BigQueryEndpointRequest } from '../models/BigQueryEndpointRequest';
import { Brand } from '../models/Brand';
import { BrandRequest } from '../models/BrandRequest';
import { BrowserCacheModule } from '../models/BrowserCacheModule';
import { BrowserCacheModuleBehaviorEnum } from '../models/BrowserCacheModuleBehaviorEnum';
import { BrowserCacheModuleRequest } from '../models/BrowserCacheModuleRequest';
import { Bucket } from '../models/Bucket';
import { BucketCreate } from '../models/BucketCreate';
import { BucketCreateRequest } from '../models/BucketCreateRequest';
import { BucketCreateResponse } from '../models/BucketCreateResponse';
import { BucketObject } from '../models/BucketObject';
import { BuildContextField } from '../models/BuildContextField';
import { BuildContextFieldRequest } from '../models/BuildContextFieldRequest';
import { CacheModule } from '../models/CacheModule';
import { CacheModuleRequest } from '../models/CacheModuleRequest';
import { CacheSetting } from '../models/CacheSetting';
import { CacheSettingRequest } from '../models/CacheSettingRequest';
import { CacheSettingResponse } from '../models/CacheSettingResponse';
import { CacheSettingsApplicationAcceleratorModule } from '../models/CacheSettingsApplicationAcceleratorModule';
import { CacheSettingsApplicationAcceleratorModuleRequest } from '../models/CacheSettingsApplicationAcceleratorModuleRequest';
import { CacheSettingsCacheModule } from '../models/CacheSettingsCacheModule';
import { CacheSettingsCacheModuleBehaviorEnum } from '../models/CacheSettingsCacheModuleBehaviorEnum';
import { CacheSettingsCacheModuleRequest } from '../models/CacheSettingsCacheModuleRequest';
import { CacheSettingsModules } from '../models/CacheSettingsModules';
import { CacheSettingsModulesRequest } from '../models/CacheSettingsModulesRequest';
import { CacheSettingsTieredCacheModule } from '../models/CacheSettingsTieredCacheModule';
import { CacheSettingsTieredCacheModuleRequest } from '../models/CacheSettingsTieredCacheModuleRequest';
import { CacheVaryByCookiesModule } from '../models/CacheVaryByCookiesModule';
import { CacheVaryByCookiesModuleRequest } from '../models/CacheVaryByCookiesModuleRequest';
import { CacheVaryByDevicesModule } from '../models/CacheVaryByDevicesModule';
import { CacheVaryByDevicesModuleBehaviorEnum } from '../models/CacheVaryByDevicesModuleBehaviorEnum';
import { CacheVaryByDevicesModuleRequest } from '../models/CacheVaryByDevicesModuleRequest';
import { CacheVaryByMethodEnum } from '../models/CacheVaryByMethodEnum';
import { CacheVaryByQuerystringModule } from '../models/CacheVaryByQuerystringModule';
import { CacheVaryByQuerystringModuleRequest } from '../models/CacheVaryByQuerystringModuleRequest';
import { Certificate } from '../models/Certificate';
import { CertificateRequest } from '../models/CertificateRequest';
import { CertificateResponse } from '../models/CertificateResponse';
import { CertificateRevocationList } from '../models/CertificateRevocationList';
import { CertificateRevocationListResponse } from '../models/CertificateRevocationListResponse';
import { CertificateSigningRequest } from '../models/CertificateSigningRequest';
import { ChatThread } from '../models/ChatThread';
import { ChatThreadRequest } from '../models/ChatThreadRequest';
import { Chunk } from '../models/Chunk';
import { CiphersEnum } from '../models/CiphersEnum';
import { CloneApplicationRequest } from '../models/CloneApplicationRequest';
import { CloneFirewallRequest } from '../models/CloneFirewallRequest';
import { CloneWAFRequest } from '../models/CloneWAFRequest';
import { CodeEnum } from '../models/CodeEnum';
import { ConditionalEnum } from '../models/ConditionalEnum';
import { Connector } from '../models/Connector';
import { ConnectorHTTP } from '../models/ConnectorHTTP';
import { ConnectorHTTPAttributes } from '../models/ConnectorHTTPAttributes';
import { ConnectorHTTPAttributesRequest } from '../models/ConnectorHTTPAttributesRequest';
import { ConnectorHTTPRequest } from '../models/ConnectorHTTPRequest';
import { ConnectorLiveIngest } from '../models/ConnectorLiveIngest';
import { ConnectorLiveIngestAttributes } from '../models/ConnectorLiveIngestAttributes';
import { ConnectorLiveIngestAttributesRequest } from '../models/ConnectorLiveIngestAttributesRequest';
import { ConnectorLiveIngestRequest } from '../models/ConnectorLiveIngestRequest';
import { ConnectorRequest } from '../models/ConnectorRequest';
import { ConnectorResponse } from '../models/ConnectorResponse';
import { ConnectorStorage } from '../models/ConnectorStorage';
import { ConnectorStorageAttributes } from '../models/ConnectorStorageAttributes';
import { ConnectorStorageAttributesRequest } from '../models/ConnectorStorageAttributesRequest';
import { ConnectorStorageRequest } from '../models/ConnectorStorageRequest';
import { Content } from '../models/Content';
import { ContentRequest } from '../models/ContentRequest';
import { ContentTypeEnum } from '../models/ContentTypeEnum';
import { ContinuousDeployment } from '../models/ContinuousDeployment';
import { ContinuousDeploymentListResponse } from '../models/ContinuousDeploymentListResponse';
import { ContinuousDeploymentRequest } from '../models/ContinuousDeploymentRequest';
import { ContinuousDeploymentResponse } from '../models/ContinuousDeploymentResponse';
import { CreateAccountRequest } from '../models/CreateAccountRequest';
import { CreateBrandRequest } from '../models/CreateBrandRequest';
import { CreateOrganizationRequest } from '../models/CreateOrganizationRequest';
import { CreateResellerRequest } from '../models/CreateResellerRequest';
import { CreateWorkspaceRequest } from '../models/CreateWorkspaceRequest';
import { Credential } from '../models/Credential';
import { CredentialCreateRequest } from '../models/CredentialCreateRequest';
import { CredentialResponse } from '../models/CredentialResponse';
import { Credit } from '../models/Credit';
import { CreditRequest } from '../models/CreditRequest';
import { CreditResponse } from '../models/CreditResponse';
import { CriterionOperatorEnum } from '../models/CriterionOperatorEnum';
import { CustomPage } from '../models/CustomPage';
import { CustomPageRequest } from '../models/CustomPageRequest';
import { CustomPageResponse } from '../models/CustomPageResponse';
import { DNSSEC } from '../models/DNSSEC';
import { DNSSECRequest } from '../models/DNSSECRequest';
import { DNSSECResponse } from '../models/DNSSECResponse';
import { Dashboard } from '../models/Dashboard';
import { DashboardListResponse } from '../models/DashboardListResponse';
import { DashboardRequest } from '../models/DashboardRequest';
import { DashboardResponse } from '../models/DashboardResponse';
import { DataSource } from '../models/DataSource';
import { DataSourceEnum } from '../models/DataSourceEnum';
import { DataStream } from '../models/DataStream';
import { DataStreamRequest } from '../models/DataStreamRequest';
import { DataStreamResponse } from '../models/DataStreamResponse';
import { DatabaseDetail } from '../models/DatabaseDetail';
import { DatabaseDetailResponse } from '../models/DatabaseDetailResponse';
import { DatabaseRequest } from '../models/DatabaseRequest';
import { DatadogEndpoint } from '../models/DatadogEndpoint';
import { DatadogEndpointAttributes } from '../models/DatadogEndpointAttributes';
import { DatadogEndpointAttributesRequest } from '../models/DatadogEndpointAttributesRequest';
import { DatadogEndpointAttributesTypeEnum } from '../models/DatadogEndpointAttributesTypeEnum';
import { DatadogEndpointRequest } from '../models/DatadogEndpointRequest';
import { DefaultDeploymentStrategy } from '../models/DefaultDeploymentStrategy';
import { DefaultDeploymentStrategyAttrs } from '../models/DefaultDeploymentStrategyAttrs';
import { DefaultDeploymentStrategyAttrsRequest } from '../models/DefaultDeploymentStrategyAttrsRequest';
import { DefaultDeploymentStrategyRequest } from '../models/DefaultDeploymentStrategyRequest';
import { DelegationSigner } from '../models/DelegationSigner';
import { DeleteResponse } from '../models/DeleteResponse';
import { DeploymentStrategyDefaultDeploymentStrategy } from '../models/DeploymentStrategyDefaultDeploymentStrategy';
import { DeploymentStrategyDefaultDeploymentStrategyRequest } from '../models/DeploymentStrategyDefaultDeploymentStrategyRequest';
import { DeploymentStrategyShared } from '../models/DeploymentStrategyShared';
import { DeviceGroup } from '../models/DeviceGroup';
import { DeviceGroupRequest } from '../models/DeviceGroupRequest';
import { DeviceGroupResponse } from '../models/DeviceGroupResponse';
import { DnsResolutionEnum } from '../models/DnsResolutionEnum';
import { Document } from '../models/Document';
import { DocumentRequest } from '../models/DocumentRequest';
import { ElasticsearchEndpoint } from '../models/ElasticsearchEndpoint';
import { ElasticsearchEndpointAttributes } from '../models/ElasticsearchEndpointAttributes';
import { ElasticsearchEndpointAttributesRequest } from '../models/ElasticsearchEndpointAttributesRequest';
import { ElasticsearchEndpointAttributesTypeEnum } from '../models/ElasticsearchEndpointAttributesTypeEnum';
import { ElasticsearchEndpointRequest } from '../models/ElasticsearchEndpointRequest';
import { EmbeddingModelEnum } from '../models/EmbeddingModelEnum';
import { EngineVersionEnum } from '../models/EngineVersionEnum';
import { ErrorResponse } from '../models/ErrorResponse';
import { Execution } from '../models/Execution';
import { ExecutionEnvironmentEnum } from '../models/ExecutionEnvironmentEnum';
import { ExecutionListResponse } from '../models/ExecutionListResponse';
import { ExecutionResponse } from '../models/ExecutionResponse';
import { ExecutionScript } from '../models/ExecutionScript';
import { ExecutionScriptListResponse } from '../models/ExecutionScriptListResponse';
import { ExecutionScriptResponse } from '../models/ExecutionScriptResponse';
import { Executor } from '../models/Executor';
import { ExecutorResponse } from '../models/ExecutorResponse';
import { Favorite } from '../models/Favorite';
import { FavoriteRequest } from '../models/FavoriteRequest';
import { Firewall } from '../models/Firewall';
import { FirewallBehavior } from '../models/FirewallBehavior';
import { FirewallBehaviorArgs } from '../models/FirewallBehaviorArgs';
import { FirewallBehaviorArgsRequest } from '../models/FirewallBehaviorArgsRequest';
import { FirewallBehaviorModeEnum } from '../models/FirewallBehaviorModeEnum';
import { FirewallBehaviorNoArgs } from '../models/FirewallBehaviorNoArgs';
import { FirewallBehaviorNoArgsRequest } from '../models/FirewallBehaviorNoArgsRequest';
import { FirewallBehaviorNoArgsTypeEnum } from '../models/FirewallBehaviorNoArgsTypeEnum';
import { FirewallBehaviorObjectArgs } from '../models/FirewallBehaviorObjectArgs';
import { FirewallBehaviorObjectArgsAttributes } from '../models/FirewallBehaviorObjectArgsAttributes';
import { FirewallBehaviorObjectArgsRequest } from '../models/FirewallBehaviorObjectArgsRequest';
import { FirewallBehaviorObjectArgsRequestAttributes } from '../models/FirewallBehaviorObjectArgsRequestAttributes';
import { FirewallBehaviorRequest } from '../models/FirewallBehaviorRequest';
import { FirewallBehaviorRunFunctionAttributes } from '../models/FirewallBehaviorRunFunctionAttributes';
import { FirewallBehaviorRunFunctionAttributesRequest } from '../models/FirewallBehaviorRunFunctionAttributesRequest';
import { FirewallBehaviorSetCustomResponseAttributes } from '../models/FirewallBehaviorSetCustomResponseAttributes';
import { FirewallBehaviorSetCustomResponseAttributesRequest } from '../models/FirewallBehaviorSetCustomResponseAttributesRequest';
import { FirewallBehaviorSetRateLimitAttributes } from '../models/FirewallBehaviorSetRateLimitAttributes';
import { FirewallBehaviorSetRateLimitAttributesRequest } from '../models/FirewallBehaviorSetRateLimitAttributesRequest';
import { FirewallBehaviorSetRateLimitAttributesTypeEnum } from '../models/FirewallBehaviorSetRateLimitAttributesTypeEnum';
import { FirewallBehaviorSetWafAttributes } from '../models/FirewallBehaviorSetWafAttributes';
import { FirewallBehaviorSetWafAttributesRequest } from '../models/FirewallBehaviorSetWafAttributesRequest';
import { FirewallCriterionArgument } from '../models/FirewallCriterionArgument';
import { FirewallCriterionArgumentRequest } from '../models/FirewallCriterionArgumentRequest';
import { FirewallCriterionField } from '../models/FirewallCriterionField';
import { FirewallCriterionFieldRequest } from '../models/FirewallCriterionFieldRequest';
import { FirewallCriterionFieldVariableEnum } from '../models/FirewallCriterionFieldVariableEnum';
import { FirewallFunctionInstance } from '../models/FirewallFunctionInstance';
import { FirewallFunctionInstanceArgs } from '../models/FirewallFunctionInstanceArgs';
import { FirewallFunctionInstanceRequest } from '../models/FirewallFunctionInstanceRequest';
import { FirewallFunctionInstanceResponse } from '../models/FirewallFunctionInstanceResponse';
import { FirewallModule } from '../models/FirewallModule';
import { FirewallModuleRequest } from '../models/FirewallModuleRequest';
import { FirewallModules } from '../models/FirewallModules';
import { FirewallModulesRequest } from '../models/FirewallModulesRequest';
import { FirewallRequest } from '../models/FirewallRequest';
import { FirewallResponse } from '../models/FirewallResponse';
import { FirewallRule } from '../models/FirewallRule';
import { FirewallRuleEngineOrderRequest } from '../models/FirewallRuleEngineOrderRequest';
import { FirewallRuleRequest } from '../models/FirewallRuleRequest';
import { FirewallRuleResponse } from '../models/FirewallRuleResponse';
import { Folder } from '../models/Folder';
import { FolderListResponse } from '../models/FolderListResponse';
import { FolderRequest } from '../models/FolderRequest';
import { FolderResponse } from '../models/FolderResponse';
import { Function } from '../models/Function';
import { FunctionAzionForm } from '../models/FunctionAzionForm';
import { FunctionDefaultArgs } from '../models/FunctionDefaultArgs';
import { FunctionInstance } from '../models/FunctionInstance';
import { FunctionInstanceRequest } from '../models/FunctionInstanceRequest';
import { FunctionInstanceResponse } from '../models/FunctionInstanceResponse';
import { FunctionModule } from '../models/FunctionModule';
import { FunctionModuleRequest } from '../models/FunctionModuleRequest';
import { FunctionResponse } from '../models/FunctionResponse';
import { Functions } from '../models/Functions';
import { FunctionsRequest } from '../models/FunctionsRequest';
import { Grant } from '../models/Grant';
import { GrantRequest } from '../models/GrantRequest';
import { Group } from '../models/Group';
import { GroupMembers } from '../models/GroupMembers';
import { GroupMembersRequest } from '../models/GroupMembersRequest';
import { GroupRequest } from '../models/GroupRequest';
import { HMAC } from '../models/HMAC';
import { HMACRequest } from '../models/HMACRequest';
import { HTTPConnectionOptions } from '../models/HTTPConnectionOptions';
import { HTTPConnectionOptionsRequest } from '../models/HTTPConnectionOptionsRequest';
import { HTTPModules } from '../models/HTTPModules';
import { HTTPModulesRequest } from '../models/HTTPModulesRequest';
import { HttpPostEndpoint } from '../models/HttpPostEndpoint';
import { HttpPostEndpointAttributes } from '../models/HttpPostEndpointAttributes';
import { HttpPostEndpointAttributesRequest } from '../models/HttpPostEndpointAttributesRequest';
import { HttpPostEndpointAttributesTypeEnum } from '../models/HttpPostEndpointAttributesTypeEnum';
import { HttpPostEndpointRequest } from '../models/HttpPostEndpointRequest';
import { HttpProtocol } from '../models/HttpProtocol';
import { HttpProtocolRequest } from '../models/HttpProtocolRequest';
import { HttpVersionPolicyEnum } from '../models/HttpVersionPolicyEnum';
import { ImageProcessorModule } from '../models/ImageProcessorModule';
import { ImageProcessorModuleRequest } from '../models/ImageProcessorModuleRequest';
import { InfrastructureEnum } from '../models/InfrastructureEnum';
import { InputDataSource } from '../models/InputDataSource';
import { InputDataSourceAttributes } from '../models/InputDataSourceAttributes';
import { InputDataSourceAttributesRequest } from '../models/InputDataSourceAttributesRequest';
import { InputDataSourceAttributesTypeEnum } from '../models/InputDataSourceAttributesTypeEnum';
import { InputDataSourceRequest } from '../models/InputDataSourceRequest';
import { InputInputDataSourceAttributes } from '../models/InputInputDataSourceAttributes';
import { InputInputDataSourceAttributesRequest } from '../models/InputInputDataSourceAttributesRequest';
import { InputShared } from '../models/InputShared';
import { Integration } from '../models/Integration';
import { IntegrationListResponse } from '../models/IntegrationListResponse';
import { IntegrationResponse } from '../models/IntegrationResponse';
import { JSONAPIErrorObject } from '../models/JSONAPIErrorObject';
import { JSONAPIErrorSource } from '../models/JSONAPIErrorSource';
import { KBAskRequest } from '../models/KBAskRequest';
import { KBAskResponse } from '../models/KBAskResponse';
import { KBQueryRequest } from '../models/KBQueryRequest';
import { KBQueryResponse } from '../models/KBQueryResponse';
import { KBQueryResult } from '../models/KBQueryResult';
import { KafkaEndpoint } from '../models/KafkaEndpoint';
import { KafkaEndpointAttributes } from '../models/KafkaEndpointAttributes';
import { KafkaEndpointAttributesRequest } from '../models/KafkaEndpointAttributesRequest';
import { KafkaEndpointAttributesTypeEnum } from '../models/KafkaEndpointAttributesTypeEnum';
import { KafkaEndpointRequest } from '../models/KafkaEndpointRequest';
import { KnowledgeBase } from '../models/KnowledgeBase';
import { KnowledgeBaseRequest } from '../models/KnowledgeBaseRequest';
import { LargeFileCacheModule } from '../models/LargeFileCacheModule';
import { LargeFileCacheModuleRequest } from '../models/LargeFileCacheModuleRequest';
import { LayerEnum } from '../models/LayerEnum';
import { LibraryReportRequest } from '../models/LibraryReportRequest';
import { LimitByEnum } from '../models/LimitByEnum';
import { LoadBalancerModule } from '../models/LoadBalancerModule';
import { LoadBalancerModuleConfig } from '../models/LoadBalancerModuleConfig';
import { LoadBalancerModuleConfigRequest } from '../models/LoadBalancerModuleConfigRequest';
import { LoadBalancerModuleRequest } from '../models/LoadBalancerModuleRequest';
import { LockoutPolicy } from '../models/LockoutPolicy';
import { LockoutPolicyRequest } from '../models/LockoutPolicyRequest';
import { LockoutPolicyResponse } from '../models/LockoutPolicyResponse';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { MFAToken } from '../models/MFAToken';
import { MTLS } from '../models/MTLS';
import { MTLSConfig } from '../models/MTLSConfig';
import { MTLSConfigRequest } from '../models/MTLSConfigRequest';
import { MTLSRequest } from '../models/MTLSRequest';
import { Message } from '../models/Message';
import { MessageRequest } from '../models/MessageRequest';
import { MethodEnum } from '../models/MethodEnum';
import { MinimumVersionEnum } from '../models/MinimumVersionEnum';
import { ModeEnum } from '../models/ModeEnum';
import { ModelRecord } from '../models/ModelRecord';
import { Namespace } from '../models/Namespace';
import { NamespaceCreateRequest } from '../models/NamespaceCreateRequest';
import { NamespaceList } from '../models/NamespaceList';
import { NetworkList } from '../models/NetworkList';
import { NetworkListRequest } from '../models/NetworkListRequest';
import { NetworkListResponse } from '../models/NetworkListResponse';
import { NetworkListSummary } from '../models/NetworkListSummary';
import { NetworkListTypeEnum } from '../models/NetworkListTypeEnum';
import { NodeGroups } from '../models/NodeGroups';
import { NodeGroupsById } from '../models/NodeGroupsById';
import { NodeGroupsByIdRequest } from '../models/NodeGroupsByIdRequest';
import { NodeGroupsRequest } from '../models/NodeGroupsRequest';
import { NodeServiceBind } from '../models/NodeServiceBind';
import { NodeServices } from '../models/NodeServices';
import { NodeServicesRequest } from '../models/NodeServicesRequest';
import { Nodes } from '../models/Nodes';
import { NodesRequest } from '../models/NodesRequest';
import { ObjectResponseAsyncData } from '../models/ObjectResponseAsyncData';
import { ObjectResponseData } from '../models/ObjectResponseData';
import { Order } from '../models/Order';
import { OrderRequest } from '../models/OrderRequest';
import { OrderResponse } from '../models/OrderResponse';
import { Organization } from '../models/Organization';
import { OrganizationRequest } from '../models/OrganizationRequest';
import { OriginIPACL } from '../models/OriginIPACL';
import { OriginIPACLRequest } from '../models/OriginIPACLRequest';
import { OriginShieldConfig } from '../models/OriginShieldConfig';
import { OriginShieldConfigRequest } from '../models/OriginShieldConfigRequest';
import { OriginShieldModule } from '../models/OriginShieldModule';
import { OriginShieldModuleRequest } from '../models/OriginShieldModuleRequest';
import { OriginTypeEnum } from '../models/OriginTypeEnum';
import { Output } from '../models/Output';
import { OutputRequest } from '../models/OutputRequest';
import { OutputTypeEnum } from '../models/OutputTypeEnum';
import { PageBase } from '../models/PageBase';
import { PageConnector } from '../models/PageConnector';
import { PageConnectorAttributes } from '../models/PageConnectorAttributes';
import { PageConnectorAttributesRequest } from '../models/PageConnectorAttributesRequest';
import { PageConnectorRequest } from '../models/PageConnectorRequest';
import { PageRequestBase } from '../models/PageRequestBase';
import { PaginatedAccountList } from '../models/PaginatedAccountList';
import { PaginatedApplicationList } from '../models/PaginatedApplicationList';
import { PaginatedBucketList } from '../models/PaginatedBucketList';
import { PaginatedCacheSettingList } from '../models/PaginatedCacheSettingList';
import { PaginatedCertificateList } from '../models/PaginatedCertificateList';
import { PaginatedCertificateRevocationList } from '../models/PaginatedCertificateRevocationList';
import { PaginatedChatThreadList } from '../models/PaginatedChatThreadList';
import { PaginatedChunkList } from '../models/PaginatedChunkList';
import { PaginatedConnectorList } from '../models/PaginatedConnectorList';
import { PaginatedContinuousDeploymentListResponseList } from '../models/PaginatedContinuousDeploymentListResponseList';
import { PaginatedCredentialList } from '../models/PaginatedCredentialList';
import { PaginatedCustomPageList } from '../models/PaginatedCustomPageList';
import { PaginatedDashboardListResponseList } from '../models/PaginatedDashboardListResponseList';
import { PaginatedDataSourceList } from '../models/PaginatedDataSourceList';
import { PaginatedDataStreamList } from '../models/PaginatedDataStreamList';
import { PaginatedDatabaseDetailList } from '../models/PaginatedDatabaseDetailList';
import { PaginatedDeviceGroupList } from '../models/PaginatedDeviceGroupList';
import { PaginatedDocumentList } from '../models/PaginatedDocumentList';
import { PaginatedEdgeFunctionList } from '../models/PaginatedEdgeFunctionList';
import { PaginatedExecutionListResponseList } from '../models/PaginatedExecutionListResponseList';
import { PaginatedExecutionScriptListResponseList } from '../models/PaginatedExecutionScriptListResponseList';
import { PaginatedFavoriteList } from '../models/PaginatedFavoriteList';
import { PaginatedFirewallFunctionInstanceList } from '../models/PaginatedFirewallFunctionInstanceList';
import { PaginatedFirewallList } from '../models/PaginatedFirewallList';
import { PaginatedFirewallRuleList } from '../models/PaginatedFirewallRuleList';
import { PaginatedFolderListResponseList } from '../models/PaginatedFolderListResponseList';
import { PaginatedFunctionInstanceList } from '../models/PaginatedFunctionInstanceList';
import { PaginatedGrantList } from '../models/PaginatedGrantList';
import { PaginatedGroupList } from '../models/PaginatedGroupList';
import { PaginatedIntegrationListResponseList } from '../models/PaginatedIntegrationListResponseList';
import { PaginatedKnowledgeBaseList } from '../models/PaginatedKnowledgeBaseList';
import { PaginatedMessageList } from '../models/PaginatedMessageList';
import { PaginatedNetworkListSummaryList } from '../models/PaginatedNetworkListSummaryList';
import { PaginatedNodeGroupsByIdList } from '../models/PaginatedNodeGroupsByIdList';
import { PaginatedNodeGroupsList } from '../models/PaginatedNodeGroupsList';
import { PaginatedNodeServicesList } from '../models/PaginatedNodeServicesList';
import { PaginatedNodesList } from '../models/PaginatedNodesList';
import { PaginatedPaymentHistoryList } from '../models/PaginatedPaymentHistoryList';
import { PaginatedPaymentMethodResponseList } from '../models/PaginatedPaymentMethodResponseList';
import { PaginatedPlatformListResponseList } from '../models/PaginatedPlatformListResponseList';
import { PaginatedPolicyList } from '../models/PaginatedPolicyList';
import { PaginatedRecordList } from '../models/PaginatedRecordList';
import { PaginatedReportListResponseList } from '../models/PaginatedReportListResponseList';
import { PaginatedRepositoryListResponseList } from '../models/PaginatedRepositoryListResponseList';
import { PaginatedRequestPhaseRuleList } from '../models/PaginatedRequestPhaseRuleList';
import { PaginatedResponsePhaseRuleList } from '../models/PaginatedResponsePhaseRuleList';
import { PaginatedRowListResponseList } from '../models/PaginatedRowListResponseList';
import { PaginatedServiceResourceList } from '../models/PaginatedServiceResourceList';
import { PaginatedServiceTokenList } from '../models/PaginatedServiceTokenList';
import { PaginatedServicesList } from '../models/PaginatedServicesList';
import { PaginatedTOTPDeviceList } from '../models/PaginatedTOTPDeviceList';
import { PaginatedTemplateList } from '../models/PaginatedTemplateList';
import { PaginatedToolList } from '../models/PaginatedToolList';
import { PaginatedUserList } from '../models/PaginatedUserList';
import { PaginatedWAFList } from '../models/PaginatedWAFList';
import { PaginatedWAFRuleList } from '../models/PaginatedWAFRuleList';
import { PaginatedWorkloadDeploymentList } from '../models/PaginatedWorkloadDeploymentList';
import { PaginatedWorkloadList } from '../models/PaginatedWorkloadList';
import { PaginatedZoneList } from '../models/PaginatedZoneList';
import { Pagination } from '../models/Pagination';
import { PatchedAccountRequest } from '../models/PatchedAccountRequest';
import { PatchedApplicationRequest } from '../models/PatchedApplicationRequest';
import { PatchedBrandRequest } from '../models/PatchedBrandRequest';
import { PatchedBucketRequest } from '../models/PatchedBucketRequest';
import { PatchedCacheSettingRequest } from '../models/PatchedCacheSettingRequest';
import { PatchedCertificate } from '../models/PatchedCertificate';
import { PatchedCertificateRevocationList } from '../models/PatchedCertificateRevocationList';
import { PatchedChatThreadRequest } from '../models/PatchedChatThreadRequest';
import { PatchedConnectorHTTPRequest } from '../models/PatchedConnectorHTTPRequest';
import { PatchedConnectorLiveIngestRequest } from '../models/PatchedConnectorLiveIngestRequest';
import { PatchedConnectorRequest } from '../models/PatchedConnectorRequest';
import { PatchedConnectorStorageRequest } from '../models/PatchedConnectorStorageRequest';
import { PatchedContinuousDeploymentRequest } from '../models/PatchedContinuousDeploymentRequest';
import { PatchedCustomPageRequest } from '../models/PatchedCustomPageRequest';
import { PatchedDNSSECRequest } from '../models/PatchedDNSSECRequest';
import { PatchedDashboardRequest } from '../models/PatchedDashboardRequest';
import { PatchedDataStreamRequest } from '../models/PatchedDataStreamRequest';
import { PatchedDeviceGroupRequest } from '../models/PatchedDeviceGroupRequest';
import { PatchedFirewallFunctionInstanceRequest } from '../models/PatchedFirewallFunctionInstanceRequest';
import { PatchedFirewallRequest } from '../models/PatchedFirewallRequest';
import { PatchedFirewallRuleRequest } from '../models/PatchedFirewallRuleRequest';
import { PatchedFolderRequest } from '../models/PatchedFolderRequest';
import { PatchedFunctionInstanceRequest } from '../models/PatchedFunctionInstanceRequest';
import { PatchedFunctionsRequest } from '../models/PatchedFunctionsRequest';
import { PatchedGrantRequest } from '../models/PatchedGrantRequest';
import { PatchedGroupRequest } from '../models/PatchedGroupRequest';
import { PatchedKnowledgeBaseRequest } from '../models/PatchedKnowledgeBaseRequest';
import { PatchedNetworkListRequest } from '../models/PatchedNetworkListRequest';
import { PatchedNodesRequest } from '../models/PatchedNodesRequest';
import { PatchedOrganizationRequest } from '../models/PatchedOrganizationRequest';
import { PatchedPartialUpdateRequest } from '../models/PatchedPartialUpdateRequest';
import { PatchedPolicyRequest } from '../models/PatchedPolicyRequest';
import { PatchedRecordRequest } from '../models/PatchedRecordRequest';
import { PatchedRequestPhaseRule } from '../models/PatchedRequestPhaseRule';
import { PatchedResellerRequest } from '../models/PatchedResellerRequest';
import { PatchedResponsePhaseRuleRequest } from '../models/PatchedResponsePhaseRuleRequest';
import { PatchedServiceTokenUpdateRequest } from '../models/PatchedServiceTokenUpdateRequest';
import { PatchedServicesRequest } from '../models/PatchedServicesRequest';
import { PatchedTemplateRequest } from '../models/PatchedTemplateRequest';
import { PatchedToolRequest } from '../models/PatchedToolRequest';
import { PatchedUpdateZoneRequest } from '../models/PatchedUpdateZoneRequest';
import { PatchedUserRequest } from '../models/PatchedUserRequest';
import { PatchedVersionCreateRequest } from '../models/PatchedVersionCreateRequest';
import { PatchedWAFRequest } from '../models/PatchedWAFRequest';
import { PatchedWAFRuleRequest } from '../models/PatchedWAFRuleRequest';
import { PatchedWorkloadDeploymentRequest } from '../models/PatchedWorkloadDeploymentRequest';
import { PatchedWorkloadRequest } from '../models/PatchedWorkloadRequest';
import { PatchedWorkspaceRequest } from '../models/PatchedWorkspaceRequest';
import { PaymentHistory } from '../models/PaymentHistory';
import { PaymentMethod } from '../models/PaymentMethod';
import { PaymentMethodRequest } from '../models/PaymentMethodRequest';
import { PaymentMethodResponse } from '../models/PaymentMethodResponse';
import { Platform } from '../models/Platform';
import { PlatformListResponse } from '../models/PlatformListResponse';
import { Policy } from '../models/Policy';
import { PolicyRequest } from '../models/PolicyRequest';
import { PolicyResponse } from '../models/PolicyResponse';
import { PolicyRule } from '../models/PolicyRule';
import { PolicyRuleCondition } from '../models/PolicyRuleCondition';
import { PolicyRuleConditionRequest } from '../models/PolicyRuleConditionRequest';
import { PolicyRuleRequest } from '../models/PolicyRuleRequest';
import { Protocols } from '../models/Protocols';
import { ProtocolsRequest } from '../models/ProtocolsRequest';
import { Publisher } from '../models/Publisher';
import { PublisherRequest } from '../models/PublisherRequest';
import { Purge } from '../models/Purge';
import { PurgeRequest } from '../models/PurgeRequest';
import { PurgeResponse } from '../models/PurgeResponse';
import { QRadarEndpoint } from '../models/QRadarEndpoint';
import { QRadarEndpointAttributes } from '../models/QRadarEndpointAttributes';
import { QRadarEndpointAttributesRequest } from '../models/QRadarEndpointAttributesRequest';
import { QRadarEndpointAttributesTypeEnum } from '../models/QRadarEndpointAttributesTypeEnum';
import { QRadarEndpointRequest } from '../models/QRadarEndpointRequest';
import { RecommendationRequest } from '../models/RecommendationRequest';
import { RecordRequest } from '../models/RecordRequest';
import { RecordResponse } from '../models/RecordResponse';
import { RegionEnum } from '../models/RegionEnum';
import { Report } from '../models/Report';
import { ReportListResponse } from '../models/ReportListResponse';
import { ReportRequest } from '../models/ReportRequest';
import { ReportResponse } from '../models/ReportResponse';
import { RepositoryListResponse } from '../models/RepositoryListResponse';
import { RequestPhaseBehavior } from '../models/RequestPhaseBehavior';
import { RequestPhaseBehaviorRequest } from '../models/RequestPhaseBehaviorRequest';
import { RequestPhaseRule } from '../models/RequestPhaseRule';
import { RequestPhaseRuleRequest } from '../models/RequestPhaseRuleRequest';
import { RequestPhaseRuleResponse } from '../models/RequestPhaseRuleResponse';
import { Reseller } from '../models/Reseller';
import { ResellerRequest } from '../models/ResellerRequest';
import { ResponseAccount } from '../models/ResponseAccount';
import { ResponseAccountInfo } from '../models/ResponseAccountInfo';
import { ResponseAsyncAccount } from '../models/ResponseAsyncAccount';
import { ResponseAsyncAccountInfo } from '../models/ResponseAsyncAccountInfo';
import { ResponseAsyncChatThread } from '../models/ResponseAsyncChatThread';
import { ResponseAsyncDeleteChatThread } from '../models/ResponseAsyncDeleteChatThread';
import { ResponseAsyncDeleteDocument } from '../models/ResponseAsyncDeleteDocument';
import { ResponseAsyncDeleteKnowledgeBase } from '../models/ResponseAsyncDeleteKnowledgeBase';
import { ResponseAsyncDeleteMessage } from '../models/ResponseAsyncDeleteMessage';
import { ResponseAsyncDeleteNodeServiceBind } from '../models/ResponseAsyncDeleteNodeServiceBind';
import { ResponseAsyncDeleteNodes } from '../models/ResponseAsyncDeleteNodes';
import { ResponseAsyncDeleteServices } from '../models/ResponseAsyncDeleteServices';
import { ResponseAsyncDeleteTool } from '../models/ResponseAsyncDeleteTool';
import { ResponseAsyncDocument } from '../models/ResponseAsyncDocument';
import { ResponseAsyncKnowledgeBase } from '../models/ResponseAsyncKnowledgeBase';
import { ResponseAsyncMessage } from '../models/ResponseAsyncMessage';
import { ResponseAsyncNodeGroupsById } from '../models/ResponseAsyncNodeGroupsById';
import { ResponseAsyncNodeServices } from '../models/ResponseAsyncNodeServices';
import { ResponseAsyncNodes } from '../models/ResponseAsyncNodes';
import { ResponseAsyncServices } from '../models/ResponseAsyncServices';
import { ResponseAsyncTool } from '../models/ResponseAsyncTool';
import { ResponseBucketObject } from '../models/ResponseBucketObject';
import { ResponseChatThread } from '../models/ResponseChatThread';
import { ResponseDeleteChatThread } from '../models/ResponseDeleteChatThread';
import { ResponseDeleteDocument } from '../models/ResponseDeleteDocument';
import { ResponseDeleteFavorite } from '../models/ResponseDeleteFavorite';
import { ResponseDeleteGrant } from '../models/ResponseDeleteGrant';
import { ResponseDeleteGroup } from '../models/ResponseDeleteGroup';
import { ResponseDeleteKnowledgeBase } from '../models/ResponseDeleteKnowledgeBase';
import { ResponseDeleteMessage } from '../models/ResponseDeleteMessage';
import { ResponseDeleteServiceToken } from '../models/ResponseDeleteServiceToken';
import { ResponseDeleteTool } from '../models/ResponseDeleteTool';
import { ResponseDeleteUser } from '../models/ResponseDeleteUser';
import { ResponseDocument } from '../models/ResponseDocument';
import { ResponseFavorite } from '../models/ResponseFavorite';
import { ResponseGrant } from '../models/ResponseGrant';
import { ResponseGroup } from '../models/ResponseGroup';
import { ResponseGroupMembers } from '../models/ResponseGroupMembers';
import { ResponseKnowledgeBase } from '../models/ResponseKnowledgeBase';
import { ResponseListAccount } from '../models/ResponseListAccount';
import { ResponseListFavorite } from '../models/ResponseListFavorite';
import { ResponseListGrant } from '../models/ResponseListGrant';
import { ResponseListGroup } from '../models/ResponseListGroup';
import { ResponseListNodeGroupsById } from '../models/ResponseListNodeGroupsById';
import { ResponseListNodeServices } from '../models/ResponseListNodeServices';
import { ResponseListNodes } from '../models/ResponseListNodes';
import { ResponseListServiceToken } from '../models/ResponseListServiceToken';
import { ResponseListServices } from '../models/ResponseListServices';
import { ResponseListUser } from '../models/ResponseListUser';
import { ResponseLogin } from '../models/ResponseLogin';
import { ResponseMessage } from '../models/ResponseMessage';
import { ResponsePhaseBehavior } from '../models/ResponsePhaseBehavior';
import { ResponsePhaseBehaviorRequest } from '../models/ResponsePhaseBehaviorRequest';
import { ResponsePhaseRule } from '../models/ResponsePhaseRule';
import { ResponsePhaseRuleRequest } from '../models/ResponsePhaseRuleRequest';
import { ResponsePhaseRuleResponse } from '../models/ResponsePhaseRuleResponse';
import { ResponsePublisher } from '../models/ResponsePublisher';
import { ResponseRetrieveAccount } from '../models/ResponseRetrieveAccount';
import { ResponseRetrieveAccountInfo } from '../models/ResponseRetrieveAccountInfo';
import { ResponseRetrieveChatThread } from '../models/ResponseRetrieveChatThread';
import { ResponseRetrieveDocument } from '../models/ResponseRetrieveDocument';
import { ResponseRetrieveGrant } from '../models/ResponseRetrieveGrant';
import { ResponseRetrieveGroup } from '../models/ResponseRetrieveGroup';
import { ResponseRetrieveGroupMembers } from '../models/ResponseRetrieveGroupMembers';
import { ResponseRetrieveKnowledgeBase } from '../models/ResponseRetrieveKnowledgeBase';
import { ResponseRetrieveMessage } from '../models/ResponseRetrieveMessage';
import { ResponseRetrieveNodeServiceBind } from '../models/ResponseRetrieveNodeServiceBind';
import { ResponseRetrieveNodes } from '../models/ResponseRetrieveNodes';
import { ResponseRetrievePublisher } from '../models/ResponseRetrievePublisher';
import { ResponseRetrieveServiceToken } from '../models/ResponseRetrieveServiceToken';
import { ResponseRetrieveServices } from '../models/ResponseRetrieveServices';
import { ResponseRetrieveTool } from '../models/ResponseRetrieveTool';
import { ResponseRetrieveUser } from '../models/ResponseRetrieveUser';
import { ResponseRetrieveUserInfo } from '../models/ResponseRetrieveUserInfo';
import { ResponseServiceToken } from '../models/ResponseServiceToken';
import { ResponseServiceTokenCreate } from '../models/ResponseServiceTokenCreate';
import { ResponseServiceTokenRenew } from '../models/ResponseServiceTokenRenew';
import { ResponseTool } from '../models/ResponseTool';
import { ResponseUser } from '../models/ResponseUser';
import { ResponseUserInfo } from '../models/ResponseUserInfo';
import { Row } from '../models/Row';
import { RowListResponse } from '../models/RowListResponse';
import { RowRequest } from '../models/RowRequest';
import { RowResponse } from '../models/RowResponse';
import { RuleIdEnum } from '../models/RuleIdEnum';
import { RulesetsEnum } from '../models/RulesetsEnum';
import { RuntimeEnum } from '../models/RuntimeEnum';
import { S3Endpoint } from '../models/S3Endpoint';
import { S3EndpointAttributes } from '../models/S3EndpointAttributes';
import { S3EndpointAttributesRequest } from '../models/S3EndpointAttributesRequest';
import { S3EndpointAttributesTypeEnum } from '../models/S3EndpointAttributesTypeEnum';
import { S3EndpointRequest } from '../models/S3EndpointRequest';
import { SQLResult } from '../models/SQLResult';
import { SQLResultResponse } from '../models/SQLResultResponse';
import { SQLStatementsRequest } from '../models/SQLStatementsRequest';
import { SensitivityEnum } from '../models/SensitivityEnum';
import { ServerRoleEnum } from '../models/ServerRoleEnum';
import { ServiceResource } from '../models/ServiceResource';
import { ServiceResourceId } from '../models/ServiceResourceId';
import { ServiceResourceIdRequest } from '../models/ServiceResourceIdRequest';
import { ServiceResourceRequest } from '../models/ServiceResourceRequest';
import { ServiceToken } from '../models/ServiceToken';
import { ServiceTokenCreate } from '../models/ServiceTokenCreate';
import { ServiceTokenCreateRequest } from '../models/ServiceTokenCreateRequest';
import { ServiceTokenRenew } from '../models/ServiceTokenRenew';
import { ServiceTokenRenewRequest } from '../models/ServiceTokenRenewRequest';
import { ServiceTokenUpdateRequest } from '../models/ServiceTokenUpdateRequest';
import { Services } from '../models/Services';
import { ServicesRequest } from '../models/ServicesRequest';
import { SessionTimeoutPolicy } from '../models/SessionTimeoutPolicy';
import { SessionTimeoutPolicyRequest } from '../models/SessionTimeoutPolicyRequest';
import { SessionTimeoutPolicyResponse } from '../models/SessionTimeoutPolicyResponse';
import { SplunkEndpoint } from '../models/SplunkEndpoint';
import { SplunkEndpointAttributes } from '../models/SplunkEndpointAttributes';
import { SplunkEndpointAttributesRequest } from '../models/SplunkEndpointAttributesRequest';
import { SplunkEndpointAttributesTypeEnum } from '../models/SplunkEndpointAttributesTypeEnum';
import { SplunkEndpointRequest } from '../models/SplunkEndpointRequest';
import { StateCacheModule } from '../models/StateCacheModule';
import { StateCacheModuleRequest } from '../models/StateCacheModuleRequest';
import { StateEnum } from '../models/StateEnum';
import { StateExecutedResponse } from '../models/StateExecutedResponse';
import { StatusEnum } from '../models/StatusEnum';
import { SuccessObjectOperation } from '../models/SuccessObjectOperation';
import { SuccessObjectOperationAsync } from '../models/SuccessObjectOperationAsync';
import { TLSWorkload } from '../models/TLSWorkload';
import { TLSWorkloadRequest } from '../models/TLSWorkloadRequest';
import { TOTPDevice } from '../models/TOTPDevice';
import { TOTPDeviceList } from '../models/TOTPDeviceList';
import { TOTPDeviceResponse } from '../models/TOTPDeviceResponse';
import { TOTPVerificationRequest } from '../models/TOTPVerificationRequest';
import { Template } from '../models/Template';
import { TemplateRequest } from '../models/TemplateRequest';
import { TemplateResponse } from '../models/TemplateResponse';
import { ThreatEnum } from '../models/ThreatEnum';
import { ThresholdsConfigField } from '../models/ThresholdsConfigField';
import { ThresholdsConfigFieldRequest } from '../models/ThresholdsConfigFieldRequest';
import { Token } from '../models/Token';
import { TokenPair } from '../models/TokenPair';
import { TokenPairResponse } from '../models/TokenPairResponse';
import { TokenRequest } from '../models/TokenRequest';
import { TokenResponse } from '../models/TokenResponse';
import { Tool } from '../models/Tool';
import { ToolKBLink } from '../models/ToolKBLink';
import { ToolRequest } from '../models/ToolRequest';
import { TopologyEnum } from '../models/TopologyEnum';
import { Transform } from '../models/Transform';
import { TransformFilterWorkloads } from '../models/TransformFilterWorkloads';
import { TransformFilterWorkloadsAttributes } from '../models/TransformFilterWorkloadsAttributes';
import { TransformFilterWorkloadsAttributesRequest } from '../models/TransformFilterWorkloadsAttributesRequest';
import { TransformFilterWorkloadsAttributesTypeEnum } from '../models/TransformFilterWorkloadsAttributesTypeEnum';
import { TransformFilterWorkloadsRequest } from '../models/TransformFilterWorkloadsRequest';
import { TransformRenderTemplate } from '../models/TransformRenderTemplate';
import { TransformRenderTemplateAttributes } from '../models/TransformRenderTemplateAttributes';
import { TransformRenderTemplateAttributesRequest } from '../models/TransformRenderTemplateAttributesRequest';
import { TransformRenderTemplateAttributesTypeEnum } from '../models/TransformRenderTemplateAttributesTypeEnum';
import { TransformRenderTemplateRequest } from '../models/TransformRenderTemplateRequest';
import { TransformRequest } from '../models/TransformRequest';
import { TransformSampling } from '../models/TransformSampling';
import { TransformSamplingAttributes } from '../models/TransformSamplingAttributes';
import { TransformSamplingAttributesRequest } from '../models/TransformSamplingAttributesRequest';
import { TransformSamplingAttributesTypeEnum } from '../models/TransformSamplingAttributesTypeEnum';
import { TransformSamplingRequest } from '../models/TransformSamplingRequest';
import { TransformShared } from '../models/TransformShared';
import { TransformTransformFilterWorkloadsAttributes } from '../models/TransformTransformFilterWorkloadsAttributes';
import { TransformTransformFilterWorkloadsAttributesRequest } from '../models/TransformTransformFilterWorkloadsAttributesRequest';
import { TransformTransformRenderTemplateAttributes } from '../models/TransformTransformRenderTemplateAttributes';
import { TransformTransformRenderTemplateAttributesRequest } from '../models/TransformTransformRenderTemplateAttributesRequest';
import { TransformTransformSamplingAttributes } from '../models/TransformTransformSamplingAttributes';
import { TransformTransformSamplingAttributesRequest } from '../models/TransformTransformSamplingAttributesRequest';
import { TransportPolicyEnum } from '../models/TransportPolicyEnum';
import { TriggerEnum } from '../models/TriggerEnum';
import { UpdateAccountInfoDetailsRequest } from '../models/UpdateAccountInfoDetailsRequest';
import { UpdateUserInfoRequest } from '../models/UpdateUserInfoRequest';
import { UpdateZoneRequest } from '../models/UpdateZoneRequest';
import { User } from '../models/User';
import { UserInfo } from '../models/UserInfo';
import { UserInfoRequest } from '../models/UserInfoRequest';
import { UserLoginMethodResponse } from '../models/UserLoginMethodResponse';
import { UserRequest } from '../models/UserRequest';
import { VerificationEnum } from '../models/VerificationEnum';
import { VersionArchiveRequest } from '../models/VersionArchiveRequest';
import { VersionBuildRequest } from '../models/VersionBuildRequest';
import { VersionCancelRequest } from '../models/VersionCancelRequest';
import { VersionCreateRequest } from '../models/VersionCreateRequest';
import { WAF } from '../models/WAF';
import { WAFEngineSettingsAttributesField } from '../models/WAFEngineSettingsAttributesField';
import { WAFEngineSettingsAttributesFieldRequest } from '../models/WAFEngineSettingsAttributesFieldRequest';
import { WAFEngineSettingsField } from '../models/WAFEngineSettingsField';
import { WAFEngineSettingsFieldRequest } from '../models/WAFEngineSettingsFieldRequest';
import { WAFEngineSettingsFieldTypeEnum } from '../models/WAFEngineSettingsFieldTypeEnum';
import { WAFExceptionCondition } from '../models/WAFExceptionCondition';
import { WAFExceptionConditionRequest } from '../models/WAFExceptionConditionRequest';
import { WAFExceptionGenericCondition } from '../models/WAFExceptionGenericCondition';
import { WAFExceptionGenericConditionMatchEnum } from '../models/WAFExceptionGenericConditionMatchEnum';
import { WAFExceptionGenericConditionRequest } from '../models/WAFExceptionGenericConditionRequest';
import { WAFExceptionSpecificConditionOnName } from '../models/WAFExceptionSpecificConditionOnName';
import { WAFExceptionSpecificConditionOnNameMatchEnum } from '../models/WAFExceptionSpecificConditionOnNameMatchEnum';
import { WAFExceptionSpecificConditionOnNameRequest } from '../models/WAFExceptionSpecificConditionOnNameRequest';
import { WAFExceptionSpecificConditionOnValue } from '../models/WAFExceptionSpecificConditionOnValue';
import { WAFExceptionSpecificConditionOnValueMatchEnum } from '../models/WAFExceptionSpecificConditionOnValueMatchEnum';
import { WAFExceptionSpecificConditionOnValueRequest } from '../models/WAFExceptionSpecificConditionOnValueRequest';
import { WAFRequest } from '../models/WAFRequest';
import { WAFResponse } from '../models/WAFResponse';
import { WAFRule } from '../models/WAFRule';
import { WAFRuleOperatorEnum } from '../models/WAFRuleOperatorEnum';
import { WAFRuleRequest } from '../models/WAFRuleRequest';
import { WAFRuleResponse } from '../models/WAFRuleResponse';
import { Workload } from '../models/Workload';
import { WorkloadDeployment } from '../models/WorkloadDeployment';
import { WorkloadDeploymentRequest } from '../models/WorkloadDeploymentRequest';
import { WorkloadDeploymentResponse } from '../models/WorkloadDeploymentResponse';
import { WorkloadRequest } from '../models/WorkloadRequest';
import { WorkloadResponse } from '../models/WorkloadResponse';
import { Workspace } from '../models/Workspace';
import { WorkspaceRequest } from '../models/WorkspaceRequest';
import { Zone } from '../models/Zone';
import { ZoneRequest } from '../models/ZoneRequest';
import { ZoneResponse } from '../models/ZoneResponse';
import { ObservableAIStudioChatThreadsApi } from './ObservableAPI';

import { AIStudioChatThreadsApiRequestFactory, AIStudioChatThreadsApiResponseProcessor} from "../apis/AIStudioChatThreadsApi";
export class PromiseAIStudioChatThreadsApi {
    private api: ObservableAIStudioChatThreadsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AIStudioChatThreadsApiRequestFactory,
        responseProcessor?: AIStudioChatThreadsApiResponseProcessor
    ) {
        this.api = new ObservableAIStudioChatThreadsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new chat thread for your account.
     * Create a chat thread
     * @param [chatThreadRequest]
     */
    public createChatThreadWithHttpInfo(chatThreadRequest?: ChatThreadRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseChatThread | ResponseAsyncChatThread>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createChatThreadWithHttpInfo(chatThreadRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new chat thread for your account.
     * Create a chat thread
     * @param [chatThreadRequest]
     */
    public createChatThread(chatThreadRequest?: ChatThreadRequest, _options?: PromiseConfigurationOptions): Promise<ResponseChatThread | ResponseAsyncChatThread> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createChatThread(chatThreadRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Destruction of a specific chat thread in your account.
     * Destroy a chat thread
     * @param threadId
     */
    public destroyAChatThreadWithHttpInfo(threadId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseDeleteChatThread | ResponseAsyncDeleteChatThread>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.destroyAChatThreadWithHttpInfo(threadId, observableOptions);
        return result.toPromise();
    }

    /**
     * Destruction of a specific chat thread in your account.
     * Destroy a chat thread
     * @param threadId
     */
    public destroyAChatThread(threadId: number, _options?: PromiseConfigurationOptions): Promise<ResponseDeleteChatThread | ResponseAsyncDeleteChatThread> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.destroyAChatThread(threadId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all chat threads owned by your account.
     * List chat threads
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listChatThreadsWithHttpInfo(fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedChatThreadList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listChatThreadsWithHttpInfo(fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all chat threads owned by your account.
     * List chat threads
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listChatThreads(fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedChatThreadList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listChatThreads(fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing chat thread without affecting other fields.
     * Partially update a chat thread
     * @param threadId
     * @param [patchedChatThreadRequest]
     */
    public partialUpdateChatThreadWithHttpInfo(threadId: number, patchedChatThreadRequest?: PatchedChatThreadRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseChatThread | ResponseAsyncChatThread>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateChatThreadWithHttpInfo(threadId, patchedChatThreadRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing chat thread without affecting other fields.
     * Partially update a chat thread
     * @param threadId
     * @param [patchedChatThreadRequest]
     */
    public partialUpdateChatThread(threadId: number, patchedChatThreadRequest?: PatchedChatThreadRequest, _options?: PromiseConfigurationOptions): Promise<ResponseChatThread | ResponseAsyncChatThread> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateChatThread(threadId, patchedChatThreadRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific chat thread in your account.
     * Retrieve details from a chat thread
     * @param threadId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retriveChatThreadWithHttpInfo(threadId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseRetrieveChatThread>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retriveChatThreadWithHttpInfo(threadId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific chat thread in your account.
     * Retrieve details from a chat thread
     * @param threadId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retriveChatThread(threadId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<ResponseRetrieveChatThread> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retriveChatThread(threadId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing chat thread. This replaces the entire chat thread with the new data provided.
     * Update a chat thread
     * @param threadId
     * @param [chatThreadRequest]
     */
    public updateChatThreadWithHttpInfo(threadId: number, chatThreadRequest?: ChatThreadRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseChatThread | ResponseAsyncChatThread>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateChatThreadWithHttpInfo(threadId, chatThreadRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing chat thread. This replaces the entire chat thread with the new data provided.
     * Update a chat thread
     * @param threadId
     * @param [chatThreadRequest]
     */
    public updateChatThread(threadId: number, chatThreadRequest?: ChatThreadRequest, _options?: PromiseConfigurationOptions): Promise<ResponseChatThread | ResponseAsyncChatThread> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateChatThread(threadId, chatThreadRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAIStudioChunksApi } from './ObservableAPI';

import { AIStudioChunksApiRequestFactory, AIStudioChunksApiResponseProcessor} from "../apis/AIStudioChunksApi";
export class PromiseAIStudioChunksApi {
    private api: ObservableAIStudioChunksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AIStudioChunksApiRequestFactory,
        responseProcessor?: AIStudioChunksApiResponseProcessor
    ) {
        this.api = new ObservableAIStudioChunksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all chunks owned by your account.
     * List chunks
     * @param documentId
     * @param kbId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listChunksWithHttpInfo(documentId: number, kbId: number, fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedChunkList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listChunksWithHttpInfo(documentId, kbId, fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all chunks owned by your account.
     * List chunks
     * @param documentId
     * @param kbId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listChunks(documentId: number, kbId: number, fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedChunkList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listChunks(documentId, kbId, fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAIStudioDocumentsApi } from './ObservableAPI';

import { AIStudioDocumentsApiRequestFactory, AIStudioDocumentsApiResponseProcessor} from "../apis/AIStudioDocumentsApi";
export class PromiseAIStudioDocumentsApi {
    private api: ObservableAIStudioDocumentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AIStudioDocumentsApiRequestFactory,
        responseProcessor?: AIStudioDocumentsApiResponseProcessor
    ) {
        this.api = new ObservableAIStudioDocumentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new document for your account.
     * Create a document
     * @param kbId
     * @param [name]
     * @param [description]
     * @param [type]
     * @param [sourceUri]
     * @param [chunkStrategy]
     */
    public createDocumentWithHttpInfo(kbId: number, name?: string, description?: string, type?: string, sourceUri?: string, chunkStrategy?: { [key: string]: any; }, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseDocument | ResponseAsyncDocument>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDocumentWithHttpInfo(kbId, name, description, type, sourceUri, chunkStrategy, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new document for your account.
     * Create a document
     * @param kbId
     * @param [name]
     * @param [description]
     * @param [type]
     * @param [sourceUri]
     * @param [chunkStrategy]
     */
    public createDocument(kbId: number, name?: string, description?: string, type?: string, sourceUri?: string, chunkStrategy?: { [key: string]: any; }, _options?: PromiseConfigurationOptions): Promise<ResponseDocument | ResponseAsyncDocument> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDocument(kbId, name, description, type, sourceUri, chunkStrategy, observableOptions);
        return result.toPromise();
    }

    /**
     * Destruction of a specific document in your account.
     * Destroy a document
     * @param documentId
     * @param kbId
     */
    public destroyADocumentWithHttpInfo(documentId: number, kbId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAsyncDeleteDocument | ResponseDeleteDocument>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.destroyADocumentWithHttpInfo(documentId, kbId, observableOptions);
        return result.toPromise();
    }

    /**
     * Destruction of a specific document in your account.
     * Destroy a document
     * @param documentId
     * @param kbId
     */
    public destroyADocument(documentId: number, kbId: number, _options?: PromiseConfigurationOptions): Promise<ResponseAsyncDeleteDocument | ResponseDeleteDocument> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.destroyADocument(documentId, kbId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all documents owned by your account.
     * List documents
     * @param kbId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listDocumentsWithHttpInfo(kbId: number, fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedDocumentList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDocumentsWithHttpInfo(kbId, fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all documents owned by your account.
     * List documents
     * @param kbId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listDocuments(kbId: number, fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedDocumentList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDocuments(kbId, fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific document in your account.
     * Retrieve details from a document
     * @param documentId
     * @param kbId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retriveDocumentWithHttpInfo(documentId: number, kbId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseRetrieveDocument>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retriveDocumentWithHttpInfo(documentId, kbId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific document in your account.
     * Retrieve details from a document
     * @param documentId
     * @param kbId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retriveDocument(documentId: number, kbId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<ResponseRetrieveDocument> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retriveDocument(documentId, kbId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing document. This replaces the entire document with the new data provided.
     * Update a document
     * @param documentId
     * @param kbId
     * @param [name]
     * @param [description]
     * @param [type]
     * @param [sourceUri]
     * @param [chunkStrategy]
     */
    public updateDocumentWithHttpInfo(documentId: number, kbId: number, name?: string, description?: string, type?: string, sourceUri?: string, chunkStrategy?: { [key: string]: any; }, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseDocument | ResponseAsyncDocument>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDocumentWithHttpInfo(documentId, kbId, name, description, type, sourceUri, chunkStrategy, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing document. This replaces the entire document with the new data provided.
     * Update a document
     * @param documentId
     * @param kbId
     * @param [name]
     * @param [description]
     * @param [type]
     * @param [sourceUri]
     * @param [chunkStrategy]
     */
    public updateDocument(documentId: number, kbId: number, name?: string, description?: string, type?: string, sourceUri?: string, chunkStrategy?: { [key: string]: any; }, _options?: PromiseConfigurationOptions): Promise<ResponseDocument | ResponseAsyncDocument> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDocument(documentId, kbId, name, description, type, sourceUri, chunkStrategy, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAIStudioKnowledgeBasesApi } from './ObservableAPI';

import { AIStudioKnowledgeBasesApiRequestFactory, AIStudioKnowledgeBasesApiResponseProcessor} from "../apis/AIStudioKnowledgeBasesApi";
export class PromiseAIStudioKnowledgeBasesApi {
    private api: ObservableAIStudioKnowledgeBasesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AIStudioKnowledgeBasesApiRequestFactory,
        responseProcessor?: AIStudioKnowledgeBasesApiResponseProcessor
    ) {
        this.api = new ObservableAIStudioKnowledgeBasesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Ask a question. The agent will use RAG over this knowledge base and answer with context.
     * Ask the knowledge base
     * @param kbId
     * @param kBAskRequest
     */
    public askKnowledgeBaseWithHttpInfo(kbId: number, kBAskRequest: KBAskRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<KBAskResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.askKnowledgeBaseWithHttpInfo(kbId, kBAskRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Ask a question. The agent will use RAG over this knowledge base and answer with context.
     * Ask the knowledge base
     * @param kbId
     * @param kBAskRequest
     */
    public askKnowledgeBase(kbId: number, kBAskRequest: KBAskRequest, _options?: PromiseConfigurationOptions): Promise<KBAskResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.askKnowledgeBase(kbId, kBAskRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new knowledge base for your account.
     * Create a knowledge base
     * @param knowledgeBaseRequest
     */
    public createKnowledgeBaseWithHttpInfo(knowledgeBaseRequest: KnowledgeBaseRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAsyncKnowledgeBase | ResponseKnowledgeBase>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createKnowledgeBaseWithHttpInfo(knowledgeBaseRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new knowledge base for your account.
     * Create a knowledge base
     * @param knowledgeBaseRequest
     */
    public createKnowledgeBase(knowledgeBaseRequest: KnowledgeBaseRequest, _options?: PromiseConfigurationOptions): Promise<ResponseAsyncKnowledgeBase | ResponseKnowledgeBase> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createKnowledgeBase(knowledgeBaseRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Destruction of a specific knowledge base in your account.
     * Destroy a knowledge base
     * @param kbId
     */
    public destroyAKnowledgeBaseWithHttpInfo(kbId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAsyncDeleteKnowledgeBase | ResponseDeleteKnowledgeBase>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.destroyAKnowledgeBaseWithHttpInfo(kbId, observableOptions);
        return result.toPromise();
    }

    /**
     * Destruction of a specific knowledge base in your account.
     * Destroy a knowledge base
     * @param kbId
     */
    public destroyAKnowledgeBase(kbId: string, _options?: PromiseConfigurationOptions): Promise<ResponseAsyncDeleteKnowledgeBase | ResponseDeleteKnowledgeBase> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.destroyAKnowledgeBase(kbId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all knowledge bases owned by your account.
     * List knowledge bases
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listKnowledgeBasesWithHttpInfo(fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedKnowledgeBaseList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listKnowledgeBasesWithHttpInfo(fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all knowledge bases owned by your account.
     * List knowledge bases
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listKnowledgeBases(fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedKnowledgeBaseList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listKnowledgeBases(fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing knowledge base without affecting other fields.
     * Partially update a knowledge base
     * @param kbId
     * @param [patchedKnowledgeBaseRequest]
     */
    public partialUpdateKnowledgeBaseWithHttpInfo(kbId: string, patchedKnowledgeBaseRequest?: PatchedKnowledgeBaseRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAsyncKnowledgeBase | ResponseKnowledgeBase>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateKnowledgeBaseWithHttpInfo(kbId, patchedKnowledgeBaseRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing knowledge base without affecting other fields.
     * Partially update a knowledge base
     * @param kbId
     * @param [patchedKnowledgeBaseRequest]
     */
    public partialUpdateKnowledgeBase(kbId: string, patchedKnowledgeBaseRequest?: PatchedKnowledgeBaseRequest, _options?: PromiseConfigurationOptions): Promise<ResponseAsyncKnowledgeBase | ResponseKnowledgeBase> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateKnowledgeBase(kbId, patchedKnowledgeBaseRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Query a specific chunk from a knowledge base in your account.
     * Query a chunk from a knowledge base
     * @param kbId
     * @param kBQueryRequest
     */
    public queryChunkFromKnowledgeBaseWithHttpInfo(kbId: number, kBQueryRequest: KBQueryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<KBQueryResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.queryChunkFromKnowledgeBaseWithHttpInfo(kbId, kBQueryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Query a specific chunk from a knowledge base in your account.
     * Query a chunk from a knowledge base
     * @param kbId
     * @param kBQueryRequest
     */
    public queryChunkFromKnowledgeBase(kbId: number, kBQueryRequest: KBQueryRequest, _options?: PromiseConfigurationOptions): Promise<KBQueryResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.queryChunkFromKnowledgeBase(kbId, kBQueryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific knowledge base in your account.
     * Retrieve details from a knowledge base
     * @param kbId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retriveKnowledgeBaseWithHttpInfo(kbId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseRetrieveKnowledgeBase>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retriveKnowledgeBaseWithHttpInfo(kbId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific knowledge base in your account.
     * Retrieve details from a knowledge base
     * @param kbId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retriveKnowledgeBase(kbId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<ResponseRetrieveKnowledgeBase> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retriveKnowledgeBase(kbId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing knowledge base. This replaces the entire knowledge base with the new data provided.
     * Update a knowledge base
     * @param kbId
     * @param knowledgeBaseRequest
     */
    public updateKnowledgeBaseWithHttpInfo(kbId: string, knowledgeBaseRequest: KnowledgeBaseRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAsyncKnowledgeBase | ResponseKnowledgeBase>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateKnowledgeBaseWithHttpInfo(kbId, knowledgeBaseRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing knowledge base. This replaces the entire knowledge base with the new data provided.
     * Update a knowledge base
     * @param kbId
     * @param knowledgeBaseRequest
     */
    public updateKnowledgeBase(kbId: string, knowledgeBaseRequest: KnowledgeBaseRequest, _options?: PromiseConfigurationOptions): Promise<ResponseAsyncKnowledgeBase | ResponseKnowledgeBase> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateKnowledgeBase(kbId, knowledgeBaseRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAIStudioMessagesApi } from './ObservableAPI';

import { AIStudioMessagesApiRequestFactory, AIStudioMessagesApiResponseProcessor} from "../apis/AIStudioMessagesApi";
export class PromiseAIStudioMessagesApi {
    private api: ObservableAIStudioMessagesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AIStudioMessagesApiRequestFactory,
        responseProcessor?: AIStudioMessagesApiResponseProcessor
    ) {
        this.api = new ObservableAIStudioMessagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new message for your account.
     * Create a message
     * @param threadId
     * @param messageRequest
     */
    public createMessageWithHttpInfo(threadId: number, messageRequest: MessageRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseMessage | ResponseAsyncMessage>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createMessageWithHttpInfo(threadId, messageRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new message for your account.
     * Create a message
     * @param threadId
     * @param messageRequest
     */
    public createMessage(threadId: number, messageRequest: MessageRequest, _options?: PromiseConfigurationOptions): Promise<ResponseMessage | ResponseAsyncMessage> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createMessage(threadId, messageRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Destruction of a specific message in your account.
     * Destroy a message
     * @param messageId
     * @param threadId
     */
    public destroyAMessageWithHttpInfo(messageId: number, threadId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseDeleteMessage | ResponseAsyncDeleteMessage>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.destroyAMessageWithHttpInfo(messageId, threadId, observableOptions);
        return result.toPromise();
    }

    /**
     * Destruction of a specific message in your account.
     * Destroy a message
     * @param messageId
     * @param threadId
     */
    public destroyAMessage(messageId: number, threadId: number, _options?: PromiseConfigurationOptions): Promise<ResponseDeleteMessage | ResponseAsyncDeleteMessage> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.destroyAMessage(messageId, threadId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all messages owned by your account.
     * List messages
     * @param threadId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listMessagesWithHttpInfo(threadId: number, fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedMessageList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listMessagesWithHttpInfo(threadId, fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all messages owned by your account.
     * List messages
     * @param threadId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listMessages(threadId: number, fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedMessageList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listMessages(threadId, fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific message in your account.
     * Retrieve details from a message
     * @param messageId
     * @param threadId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retriveMessageWithHttpInfo(messageId: number, threadId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseRetrieveMessage>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retriveMessageWithHttpInfo(messageId, threadId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific message in your account.
     * Retrieve details from a message
     * @param messageId
     * @param threadId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retriveMessage(messageId: number, threadId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<ResponseRetrieveMessage> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retriveMessage(messageId, threadId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing message. This replaces the entire message with the new data provided.
     * Update a message
     * @param messageId
     * @param threadId
     * @param messageRequest
     */
    public updateMessageWithHttpInfo(messageId: number, threadId: number, messageRequest: MessageRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseMessage | ResponseAsyncMessage>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateMessageWithHttpInfo(messageId, threadId, messageRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing message. This replaces the entire message with the new data provided.
     * Update a message
     * @param messageId
     * @param threadId
     * @param messageRequest
     */
    public updateMessage(messageId: number, threadId: number, messageRequest: MessageRequest, _options?: PromiseConfigurationOptions): Promise<ResponseMessage | ResponseAsyncMessage> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateMessage(messageId, threadId, messageRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAIStudioToolsApi } from './ObservableAPI';

import { AIStudioToolsApiRequestFactory, AIStudioToolsApiResponseProcessor} from "../apis/AIStudioToolsApi";
export class PromiseAIStudioToolsApi {
    private api: ObservableAIStudioToolsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AIStudioToolsApiRequestFactory,
        responseProcessor?: AIStudioToolsApiResponseProcessor
    ) {
        this.api = new ObservableAIStudioToolsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a new knowledge base to a specific tool for your account.
     * Add a knowledge base to a tool
     * @param toolId
     * @param toolRequest
     */
    public addKnowledgeBaseToAToolWithHttpInfo(toolId: number, toolRequest: ToolRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ToolKBLink>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addKnowledgeBaseToAToolWithHttpInfo(toolId, toolRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Add a new knowledge base to a specific tool for your account.
     * Add a knowledge base to a tool
     * @param toolId
     * @param toolRequest
     */
    public addKnowledgeBaseToATool(toolId: number, toolRequest: ToolRequest, _options?: PromiseConfigurationOptions): Promise<ToolKBLink> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addKnowledgeBaseToATool(toolId, toolRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new tool for your account.
     * Create a tool
     * @param toolRequest
     */
    public createToolWithHttpInfo(toolRequest: ToolRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAsyncTool | ResponseTool>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createToolWithHttpInfo(toolRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new tool for your account.
     * Create a tool
     * @param toolRequest
     */
    public createTool(toolRequest: ToolRequest, _options?: PromiseConfigurationOptions): Promise<ResponseAsyncTool | ResponseTool> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTool(toolRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Destruction of a specific tool in your account.
     * Destroy a tool
     * @param toolId
     */
    public destroyAToolWithHttpInfo(toolId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAsyncDeleteTool | ResponseDeleteTool>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.destroyAToolWithHttpInfo(toolId, observableOptions);
        return result.toPromise();
    }

    /**
     * Destruction of a specific tool in your account.
     * Destroy a tool
     * @param toolId
     */
    public destroyATool(toolId: number, _options?: PromiseConfigurationOptions): Promise<ResponseAsyncDeleteTool | ResponseDeleteTool> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.destroyATool(toolId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all knowledge bases linked to a specific tool in your account.
     * List knowledge bases linked to a tool
     * @param toolId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listKnowledgeBasesLinkedToAToolWithHttpInfo(toolId: number, fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedKnowledgeBaseList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listKnowledgeBasesLinkedToAToolWithHttpInfo(toolId, fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all knowledge bases linked to a specific tool in your account.
     * List knowledge bases linked to a tool
     * @param toolId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listKnowledgeBasesLinkedToATool(toolId: number, fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedKnowledgeBaseList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listKnowledgeBasesLinkedToATool(toolId, fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all tools owned by your account.
     * List tools
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listToolsWithHttpInfo(fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedToolList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listToolsWithHttpInfo(fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all tools owned by your account.
     * List tools
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listTools(fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedToolList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTools(fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing tool without affecting other fields.
     * Partially update a tool
     * @param toolId
     * @param [patchedToolRequest]
     */
    public partialUpdateToolWithHttpInfo(toolId: number, patchedToolRequest?: PatchedToolRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAsyncTool | ResponseTool>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateToolWithHttpInfo(toolId, patchedToolRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing tool without affecting other fields.
     * Partially update a tool
     * @param toolId
     * @param [patchedToolRequest]
     */
    public partialUpdateTool(toolId: number, patchedToolRequest?: PatchedToolRequest, _options?: PromiseConfigurationOptions): Promise<ResponseAsyncTool | ResponseTool> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateTool(toolId, patchedToolRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove a specific knowledge base from a tool in your account.
     * Remove a knowledge base from a tool
     * @param kbId
     * @param toolId
     */
    public removeKnowledgeBaseFromAToolWithHttpInfo(kbId: number, toolId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeKnowledgeBaseFromAToolWithHttpInfo(kbId, toolId, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove a specific knowledge base from a tool in your account.
     * Remove a knowledge base from a tool
     * @param kbId
     * @param toolId
     */
    public removeKnowledgeBaseFromATool(kbId: number, toolId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeKnowledgeBaseFromATool(kbId, toolId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific tool in your account.
     * Retrieve details from a tool
     * @param toolId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retriveToolWithHttpInfo(toolId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseRetrieveTool>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retriveToolWithHttpInfo(toolId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific tool in your account.
     * Retrieve details from a tool
     * @param toolId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retriveTool(toolId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<ResponseRetrieveTool> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retriveTool(toolId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing tool. This replaces the entire tool with the new data provided.
     * Update a tool
     * @param toolId
     * @param toolRequest
     */
    public updateToolWithHttpInfo(toolId: number, toolRequest: ToolRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAsyncTool | ResponseTool>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateToolWithHttpInfo(toolId, toolRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing tool. This replaces the entire tool with the new data provided.
     * Update a tool
     * @param toolId
     * @param toolRequest
     */
    public updateTool(toolId: number, toolRequest: ToolRequest, _options?: PromiseConfigurationOptions): Promise<ResponseAsyncTool | ResponseTool> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTool(toolId, toolRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAccountsDescendantsApi } from './ObservableAPI';

import { AccountsDescendantsApiRequestFactory, AccountsDescendantsApiResponseProcessor} from "../apis/AccountsDescendantsApi";
export class PromiseAccountsDescendantsApi {
    private api: ObservableAccountsDescendantsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountsDescendantsApiRequestFactory,
        responseProcessor?: AccountsDescendantsApiResponseProcessor
    ) {
        this.api = new ObservableAccountsDescendantsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new sub-account under the logged-in user\'s account.
     * Create a new account
     * @param [createAccountRequest]
     */
    public createDescendantAccountWithHttpInfo(createAccountRequest?: CreateAccountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAccount | ResponseAsyncAccount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDescendantAccountWithHttpInfo(createAccountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new sub-account under the logged-in user\'s account.
     * Create a new account
     * @param [createAccountRequest]
     */
    public createDescendantAccount(createAccountRequest?: CreateAccountRequest, _options?: PromiseConfigurationOptions): Promise<ResponseAccount | ResponseAsyncAccount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDescendantAccount(createAccountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * List all accounts that are descendants of the logged-in user\'s account.
     * List accounts
     * @param [active] Filter by active status.
     * @param [created] Filter by created date (exact match).
     * @param [createdGte] Filter by created date (greater than or equal).
     * @param [createdLte] Filter by created date (less than or equal).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by account ID (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModified] Filter by last modified date (exact match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [parentId] Filter by parent account ID (accepts comma-separated values).
     * @param [search] A search term.
     */
    public listDescendantsAccountsWithHttpInfo(active?: boolean, created?: Date, createdGte?: Date, createdLte?: Date, fields?: string, id?: string, lastEditor?: string, lastModified?: Date, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, parentId?: string, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedAccountList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDescendantsAccountsWithHttpInfo(active, created, createdGte, createdLte, fields, id, lastEditor, lastModified, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, parentId, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all accounts that are descendants of the logged-in user\'s account.
     * List accounts
     * @param [active] Filter by active status.
     * @param [created] Filter by created date (exact match).
     * @param [createdGte] Filter by created date (greater than or equal).
     * @param [createdLte] Filter by created date (less than or equal).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by account ID (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModified] Filter by last modified date (exact match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [parentId] Filter by parent account ID (accepts comma-separated values).
     * @param [search] A search term.
     */
    public listDescendantsAccounts(active?: boolean, created?: Date, createdGte?: Date, createdLte?: Date, fields?: string, id?: string, lastEditor?: string, lastModified?: Date, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, parentId?: string, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedAccountList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDescendantsAccounts(active, created, createdGte, createdLte, fields, id, lastEditor, lastModified, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, parentId, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update specific fields of an account under the logged-in user\'s account. Only editable fields, such as `name`, can be updated with this operation.
     * Partially update account details
     * @param accountId A unique integer value identifying the account.
     * @param [patchedAccountRequest]
     */
    public partialUpdateDescendantAccountWithHttpInfo(accountId: number, patchedAccountRequest?: PatchedAccountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAccount | ResponseAsyncAccount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateDescendantAccountWithHttpInfo(accountId, patchedAccountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update specific fields of an account under the logged-in user\'s account. Only editable fields, such as `name`, can be updated with this operation.
     * Partially update account details
     * @param accountId A unique integer value identifying the account.
     * @param [patchedAccountRequest]
     */
    public partialUpdateDescendantAccount(accountId: number, patchedAccountRequest?: PatchedAccountRequest, _options?: PromiseConfigurationOptions): Promise<ResponseAccount | ResponseAsyncAccount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateDescendantAccount(accountId, patchedAccountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve detailed information of a specific account under the logged-in user\'s account.
     * Retrieve account details
     * @param accountId A unique integer value identifying the account.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveDescendantAccountWithHttpInfo(accountId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseRetrieveAccount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveDescendantAccountWithHttpInfo(accountId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve detailed information of a specific account under the logged-in user\'s account.
     * Retrieve account details
     * @param accountId A unique integer value identifying the account.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveDescendantAccount(accountId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<ResponseRetrieveAccount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveDescendantAccount(accountId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the information of a specific account under the logged-in user\'s account. This operation allows replacing the entire account data with new values.
     * Update account details
     * @param accountId A unique integer value identifying the account.
     * @param [accountRequest]
     */
    public updateDescendantAccountWithHttpInfo(accountId: number, accountRequest?: AccountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAccount | ResponseAsyncAccount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDescendantAccountWithHttpInfo(accountId, accountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the information of a specific account under the logged-in user\'s account. This operation allows replacing the entire account data with new values.
     * Update account details
     * @param accountId A unique integer value identifying the account.
     * @param [accountRequest]
     */
    public updateDescendantAccount(accountId: number, accountRequest?: AccountRequest, _options?: PromiseConfigurationOptions): Promise<ResponseAccount | ResponseAsyncAccount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDescendantAccount(accountId, accountRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAccountsInfoApi } from './ObservableAPI';

import { AccountsInfoApiRequestFactory, AccountsInfoApiResponseProcessor} from "../apis/AccountsInfoApi";
export class PromiseAccountsInfoApi {
    private api: ObservableAccountsInfoApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountsInfoApiRequestFactory,
        responseProcessor?: AccountsInfoApiResponseProcessor
    ) {
        this.api = new ObservableAccountsInfoApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve detailed information about your account or a specific child account under your logged-in account.
     * Retrieve account information details
     * @param accountId A unique integer value identifying the account.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveAccountInfoDetailsWithHttpInfo(accountId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseRetrieveAccountInfo>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveAccountInfoDetailsWithHttpInfo(accountId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve detailed information about your account or a specific child account under your logged-in account.
     * Retrieve account information details
     * @param accountId A unique integer value identifying the account.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveAccountInfoDetails(accountId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<ResponseRetrieveAccountInfo> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveAccountInfoDetails(accountId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the information details about your account or a specific child account under your logged-in account. This operation allows replacing the entire account info data with new values. In this operation, you can also clear all detailed information of an account by providing an empty dictionary in the `info` field.
     * Update account information details
     * @param accountId A unique integer value identifying the account.
     * @param [updateAccountInfoDetailsRequest]
     */
    public updateAccountInfoDetailsWithHttpInfo(accountId: number, updateAccountInfoDetailsRequest?: UpdateAccountInfoDetailsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAsyncAccountInfo | ResponseAccountInfo>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAccountInfoDetailsWithHttpInfo(accountId, updateAccountInfoDetailsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the information details about your account or a specific child account under your logged-in account. This operation allows replacing the entire account info data with new values. In this operation, you can also clear all detailed information of an account by providing an empty dictionary in the `info` field.
     * Update account information details
     * @param accountId A unique integer value identifying the account.
     * @param [updateAccountInfoDetailsRequest]
     */
    public updateAccountInfoDetails(accountId: number, updateAccountInfoDetailsRequest?: UpdateAccountInfoDetailsRequest, _options?: PromiseConfigurationOptions): Promise<ResponseAsyncAccountInfo | ResponseAccountInfo> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAccountInfoDetails(accountId, updateAccountInfoDetailsRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAccountsLoggedInApi } from './ObservableAPI';

import { AccountsLoggedInApiRequestFactory, AccountsLoggedInApiResponseProcessor} from "../apis/AccountsLoggedInApi";
export class PromiseAccountsLoggedInApi {
    private api: ObservableAccountsLoggedInApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountsLoggedInApiRequestFactory,
        responseProcessor?: AccountsLoggedInApiResponseProcessor
    ) {
        this.api = new ObservableAccountsLoggedInApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Partially update specific fields of the currently logged-in user\'s account. Only editable fields, such as `name`, can be updated with this operation.
     * Partially update logged account details
     * @param [patchedAccountRequest]
     */
    public partialUpdateLoggedAccountWithHttpInfo(patchedAccountRequest?: PatchedAccountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAccount | ResponseAsyncAccount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateLoggedAccountWithHttpInfo(patchedAccountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially update specific fields of the currently logged-in user\'s account. Only editable fields, such as `name`, can be updated with this operation.
     * Partially update logged account details
     * @param [patchedAccountRequest]
     */
    public partialUpdateLoggedAccount(patchedAccountRequest?: PatchedAccountRequest, _options?: PromiseConfigurationOptions): Promise<ResponseAccount | ResponseAsyncAccount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateLoggedAccount(patchedAccountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve detailed information about the currently logged-in user\'s account.
     * Retrieve logged account details
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveLoggedAccountDetailsWithHttpInfo(fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseRetrieveAccount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveLoggedAccountDetailsWithHttpInfo(fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve detailed information about the currently logged-in user\'s account.
     * Retrieve logged account details
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveLoggedAccountDetails(fields?: string, _options?: PromiseConfigurationOptions): Promise<ResponseRetrieveAccount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveLoggedAccountDetails(fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the details of the currently logged-in user\'s account. This operation allows replacing the entire account data with new values.
     * Update logged account details
     * @param [accountRequest]
     */
    public updateLoggedAccountWithHttpInfo(accountRequest?: AccountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAccount | ResponseAsyncAccount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLoggedAccountWithHttpInfo(accountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the details of the currently logged-in user\'s account. This operation allows replacing the entire account data with new values.
     * Update logged account details
     * @param [accountRequest]
     */
    public updateLoggedAccount(accountRequest?: AccountRequest, _options?: PromiseConfigurationOptions): Promise<ResponseAccount | ResponseAsyncAccount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLoggedAccount(accountRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableApplicationVersionsApi } from './ObservableAPI';

import { ApplicationVersionsApiRequestFactory, ApplicationVersionsApiResponseProcessor} from "../apis/ApplicationVersionsApi";
export class PromiseApplicationVersionsApi {
    private api: ObservableApplicationVersionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationVersionsApiRequestFactory,
        responseProcessor?: ApplicationVersionsApiResponseProcessor
    ) {
        this.api = new ObservableApplicationVersionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a ready version (soft-delete).
     * Archive an Application version
     * @param applicationId The ID (global_id) of the Application resource.
     * @param versionId The identifier of the version.
     * @param [versionArchiveRequest]
     */
    public archiveApplicationVersionWithHttpInfo(applicationId: number, versionId: string, versionArchiveRequest?: VersionArchiveRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.archiveApplicationVersionWithHttpInfo(applicationId, versionId, versionArchiveRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Archive a ready version (soft-delete).
     * Archive an Application version
     * @param applicationId The ID (global_id) of the Application resource.
     * @param versionId The identifier of the version.
     * @param [versionArchiveRequest]
     */
    public archiveApplicationVersion(applicationId: number, versionId: string, versionArchiveRequest?: VersionArchiveRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.archiveApplicationVersion(applicationId, versionId, versionArchiveRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build an Application version
     * @param applicationId The ID (global_id) of the Application resource.
     * @param versionId The identifier of the version.
     * @param [versionBuildRequest]
     */
    public buildApplicationVersionWithHttpInfo(applicationId: number, versionId: string, versionBuildRequest?: VersionBuildRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.buildApplicationVersionWithHttpInfo(applicationId, versionId, versionBuildRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build an Application version
     * @param applicationId The ID (global_id) of the Application resource.
     * @param versionId The identifier of the version.
     * @param [versionBuildRequest]
     */
    public buildApplicationVersion(applicationId: number, versionId: string, versionBuildRequest?: VersionBuildRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.buildApplicationVersion(applicationId, versionId, versionBuildRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel an Application version build
     * @param applicationId The ID (global_id) of the Application resource.
     * @param versionId The identifier of the version.
     * @param [versionBuildRequest]
     */
    public cancelApplicationVersionBuildWithHttpInfo(applicationId: number, versionId: string, versionBuildRequest?: VersionBuildRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cancelApplicationVersionBuildWithHttpInfo(applicationId, versionId, versionBuildRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel an Application version build
     * @param applicationId The ID (global_id) of the Application resource.
     * @param versionId The identifier of the version.
     * @param [versionBuildRequest]
     */
    public cancelApplicationVersionBuild(applicationId: number, versionId: string, versionBuildRequest?: VersionBuildRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cancelApplicationVersionBuild(applicationId, versionId, versionBuildRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new version by cloning an existing one.
     * Create a new Application version
     * @param applicationId The ID (global_id) of the Application resource.
     * @param [versionCreateRequest]
     */
    public createApplicationVersionWithHttpInfo(applicationId: number, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createApplicationVersionWithHttpInfo(applicationId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new version by cloning an existing one.
     * Create a new Application version
     * @param applicationId The ID (global_id) of the Application resource.
     * @param [versionCreateRequest]
     */
    public createApplicationVersion(applicationId: number, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createApplicationVersion(applicationId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific version of an Application.
     * Delete an Application version
     * @param applicationId The ID (global_id) of the Application resource.
     * @param versionId The identifier of the version.
     */
    public deleteApplicationVersionWithHttpInfo(applicationId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteApplicationVersionWithHttpInfo(applicationId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific version of an Application.
     * Delete an Application version
     * @param applicationId The ID (global_id) of the Application resource.
     * @param versionId The identifier of the version.
     */
    public deleteApplicationVersion(applicationId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteApplicationVersion(applicationId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all versions of a specific Application.
     * List Application versions
     * @param applicationId The ID (global_id) of the Application resource.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public listApplicationVersionsWithHttpInfo(applicationId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listApplicationVersionsWithHttpInfo(applicationId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * List all versions of a specific Application.
     * List Application versions
     * @param applicationId The ID (global_id) of the Application resource.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public listApplicationVersions(applicationId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listApplicationVersions(applicationId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially update a draft version of an Application.
     * Partially update an Application version
     * @param applicationId The ID (global_id) of the Application resource.
     * @param versionId The identifier of the version.
     * @param [patchedVersionCreateRequest]
     */
    public partialUpdateApplicationVersionWithHttpInfo(applicationId: number, versionId: string, patchedVersionCreateRequest?: PatchedVersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateApplicationVersionWithHttpInfo(applicationId, versionId, patchedVersionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially update a draft version of an Application.
     * Partially update an Application version
     * @param applicationId The ID (global_id) of the Application resource.
     * @param versionId The identifier of the version.
     * @param [patchedVersionCreateRequest]
     */
    public partialUpdateApplicationVersion(applicationId: number, versionId: string, patchedVersionCreateRequest?: PatchedVersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateApplicationVersion(applicationId, versionId, patchedVersionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific version of an Application.
     * Retrieve an Application version
     * @param applicationId The ID (global_id) of the Application resource.
     * @param versionId The identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveApplicationVersionWithHttpInfo(applicationId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveApplicationVersionWithHttpInfo(applicationId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific version of an Application.
     * Retrieve an Application version
     * @param applicationId The ID (global_id) of the Application resource.
     * @param versionId The identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveApplicationVersion(applicationId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveApplicationVersion(applicationId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a draft version of an Application.
     * Update an Application version
     * @param applicationId The ID (global_id) of the Application resource.
     * @param versionId The identifier of the version.
     * @param [versionCreateRequest]
     */
    public updateApplicationVersionWithHttpInfo(applicationId: number, versionId: string, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateApplicationVersionWithHttpInfo(applicationId, versionId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a draft version of an Application.
     * Update an Application version
     * @param applicationId The ID (global_id) of the Application resource.
     * @param versionId The identifier of the version.
     * @param [versionCreateRequest]
     */
    public updateApplicationVersion(applicationId: number, versionId: string, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateApplicationVersion(applicationId, versionId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableApplicationsApi } from './ObservableAPI';

import { ApplicationsApiRequestFactory, ApplicationsApiResponseProcessor} from "../apis/ApplicationsApi";
export class PromiseApplicationsApi {
    private api: ObservableApplicationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationsApiRequestFactory,
        responseProcessor?: ApplicationsApiResponseProcessor
    ) {
        this.api = new ObservableApplicationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Application by performing a deep copy of an existing Application, including its Cache Settings, Origins, Error Responses, Function Instances, and Rules Engine.
     * Clone an Application
     * @param applicationId A unique integer value identifying the application.
     * @param cloneApplicationRequest
     */
    public cloneApplicationWithHttpInfo(applicationId: number, cloneApplicationRequest: CloneApplicationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApplicationResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cloneApplicationWithHttpInfo(applicationId, cloneApplicationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Application by performing a deep copy of an existing Application, including its Cache Settings, Origins, Error Responses, Function Instances, and Rules Engine.
     * Clone an Application
     * @param applicationId A unique integer value identifying the application.
     * @param cloneApplicationRequest
     */
    public cloneApplication(applicationId: number, cloneApplicationRequest: CloneApplicationRequest, _options?: PromiseConfigurationOptions): Promise<ApplicationResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cloneApplication(applicationId, cloneApplicationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Application in your account.
     * Create an Application
     * @param applicationRequest
     */
    public createApplicationWithHttpInfo(applicationRequest: ApplicationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApplicationResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createApplicationWithHttpInfo(applicationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Application in your account.
     * Create an Application
     * @param applicationRequest
     */
    public createApplication(applicationRequest: ApplicationRequest, _options?: PromiseConfigurationOptions): Promise<ApplicationResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createApplication(applicationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Application in your account.
     * Delete an Application
     * @param applicationId A unique integer value identifying the application.
     */
    public deleteApplicationWithHttpInfo(applicationId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteApplicationWithHttpInfo(applicationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Application in your account.
     * Delete an Application
     * @param applicationId A unique integer value identifying the application.
     */
    public deleteApplication(applicationId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteApplication(applicationId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Applications owned by your account.
     * List Applications
     * @param [active] Filter by active status.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listApplicationsWithHttpInfo(active?: boolean, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedApplicationList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listApplicationsWithHttpInfo(active, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Applications owned by your account.
     * List Applications
     * @param [active] Filter by active status.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listApplications(active?: boolean, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedApplicationList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listApplications(active, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Application without affecting other fields.
     * Partially update an Application
     * @param applicationId A unique integer value identifying the application.
     * @param [patchedApplicationRequest]
     */
    public partialUpdateApplicationWithHttpInfo(applicationId: number, patchedApplicationRequest?: PatchedApplicationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApplicationResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateApplicationWithHttpInfo(applicationId, patchedApplicationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Application without affecting other fields.
     * Partially update an Application
     * @param applicationId A unique integer value identifying the application.
     * @param [patchedApplicationRequest]
     */
    public partialUpdateApplication(applicationId: number, patchedApplicationRequest?: PatchedApplicationRequest, _options?: PromiseConfigurationOptions): Promise<ApplicationResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateApplication(applicationId, patchedApplicationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Application in your account.
     * Retrieve details of an Application
     * @param applicationId A unique integer value identifying the application.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveApplicationWithHttpInfo(applicationId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApplicationResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveApplicationWithHttpInfo(applicationId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Application in your account.
     * Retrieve details of an Application
     * @param applicationId A unique integer value identifying the application.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveApplication(applicationId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<ApplicationResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveApplication(applicationId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Application. This replaces the entire Application with the new data provided.
     * Update an Application
     * @param applicationId A unique integer value identifying the application.
     * @param applicationRequest
     */
    public updateApplicationWithHttpInfo(applicationId: number, applicationRequest: ApplicationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApplicationResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateApplicationWithHttpInfo(applicationId, applicationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Application. This replaces the entire Application with the new data provided.
     * Update an Application
     * @param applicationId A unique integer value identifying the application.
     * @param applicationRequest
     */
    public updateApplication(applicationId: number, applicationRequest: ApplicationRequest, _options?: PromiseConfigurationOptions): Promise<ApplicationResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateApplication(applicationId, applicationRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableApplicationsCacheSettingsApi } from './ObservableAPI';

import { ApplicationsCacheSettingsApiRequestFactory, ApplicationsCacheSettingsApiResponseProcessor} from "../apis/ApplicationsCacheSettingsApi";
export class PromiseApplicationsCacheSettingsApi {
    private api: ObservableApplicationsCacheSettingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationsCacheSettingsApiRequestFactory,
        responseProcessor?: ApplicationsCacheSettingsApiResponseProcessor
    ) {
        this.api = new ObservableApplicationsCacheSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Cache Setting in your account.
     * Create an Applications Cache Setting
     * @param applicationId A unique integer value identifying the application.
     * @param cacheSettingRequest
     */
    public createCacheSettingWithHttpInfo(applicationId: number, cacheSettingRequest: CacheSettingRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CacheSettingResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCacheSettingWithHttpInfo(applicationId, cacheSettingRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Cache Setting in your account.
     * Create an Applications Cache Setting
     * @param applicationId A unique integer value identifying the application.
     * @param cacheSettingRequest
     */
    public createCacheSetting(applicationId: number, cacheSettingRequest: CacheSettingRequest, _options?: PromiseConfigurationOptions): Promise<CacheSettingResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCacheSetting(applicationId, cacheSettingRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Cache Setting in your account.
     * Create an Applications Cache Setting
     * @param applicationId A unique integer value identifying the application.
     * @param versionId The ULID identifier of the version.
     * @param cacheSettingRequest
     */
    public createCacheSetting2WithHttpInfo(applicationId: number, versionId: string, cacheSettingRequest: CacheSettingRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CacheSettingResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCacheSetting2WithHttpInfo(applicationId, versionId, cacheSettingRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Cache Setting in your account.
     * Create an Applications Cache Setting
     * @param applicationId A unique integer value identifying the application.
     * @param versionId The ULID identifier of the version.
     * @param cacheSettingRequest
     */
    public createCacheSetting2(applicationId: number, versionId: string, cacheSettingRequest: CacheSettingRequest, _options?: PromiseConfigurationOptions): Promise<CacheSettingResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCacheSetting2(applicationId, versionId, cacheSettingRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Cache Setting in your account.
     * Delete an Applications Cache Setting
     * @param applicationId A unique integer value identifying the application.
     * @param cacheSettingId A unique integer value identifying the cache setting.
     */
    public deleteCacheSettingWithHttpInfo(applicationId: number, cacheSettingId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCacheSettingWithHttpInfo(applicationId, cacheSettingId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Cache Setting in your account.
     * Delete an Applications Cache Setting
     * @param applicationId A unique integer value identifying the application.
     * @param cacheSettingId A unique integer value identifying the cache setting.
     */
    public deleteCacheSetting(applicationId: number, cacheSettingId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCacheSetting(applicationId, cacheSettingId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Cache Setting in your account.
     * Delete an Applications Cache Setting
     * @param applicationId A unique integer value identifying the application.
     * @param cacheSettingId A unique integer value identifying the cache setting.
     * @param versionId The ULID identifier of the version.
     */
    public deleteCacheSetting2WithHttpInfo(applicationId: number, cacheSettingId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCacheSetting2WithHttpInfo(applicationId, cacheSettingId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Cache Setting in your account.
     * Delete an Applications Cache Setting
     * @param applicationId A unique integer value identifying the application.
     * @param cacheSettingId A unique integer value identifying the cache setting.
     * @param versionId The ULID identifier of the version.
     */
    public deleteCacheSetting2(applicationId: number, cacheSettingId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCacheSetting2(applicationId, cacheSettingId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Cache Settings owned by your account.
     * List all Applications Cache Settings
     * @param applicationId A unique integer value identifying the application.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listCacheSettingsWithHttpInfo(applicationId: number, fields?: string, id?: number, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedCacheSettingList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCacheSettingsWithHttpInfo(applicationId, fields, id, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Cache Settings owned by your account.
     * List all Applications Cache Settings
     * @param applicationId A unique integer value identifying the application.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listCacheSettings(applicationId: number, fields?: string, id?: number, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedCacheSettingList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCacheSettings(applicationId, fields, id, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Cache Settings owned by your account.
     * List all Applications Cache Settings
     * @param applicationId A unique integer value identifying the application.
     * @param versionId The ULID identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listCacheSettings2WithHttpInfo(applicationId: number, versionId: string, fields?: string, id?: number, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedCacheSettingList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCacheSettings2WithHttpInfo(applicationId, versionId, fields, id, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Cache Settings owned by your account.
     * List all Applications Cache Settings
     * @param applicationId A unique integer value identifying the application.
     * @param versionId The ULID identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listCacheSettings2(applicationId: number, versionId: string, fields?: string, id?: number, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedCacheSettingList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCacheSettings2(applicationId, versionId, fields, id, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Cache Setting without affecting other fields.
     * Partially update an Applications Cache Setting
     * @param applicationId A unique integer value identifying the application.
     * @param cacheSettingId A unique integer value identifying the cache setting.
     * @param [patchedCacheSettingRequest]
     */
    public partialUpdateCacheSettingWithHttpInfo(applicationId: number, cacheSettingId: number, patchedCacheSettingRequest?: PatchedCacheSettingRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CacheSettingResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateCacheSettingWithHttpInfo(applicationId, cacheSettingId, patchedCacheSettingRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Cache Setting without affecting other fields.
     * Partially update an Applications Cache Setting
     * @param applicationId A unique integer value identifying the application.
     * @param cacheSettingId A unique integer value identifying the cache setting.
     * @param [patchedCacheSettingRequest]
     */
    public partialUpdateCacheSetting(applicationId: number, cacheSettingId: number, patchedCacheSettingRequest?: PatchedCacheSettingRequest, _options?: PromiseConfigurationOptions): Promise<CacheSettingResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateCacheSetting(applicationId, cacheSettingId, patchedCacheSettingRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Cache Setting without affecting other fields.
     * Partially update an Applications Cache Setting
     * @param applicationId A unique integer value identifying the application.
     * @param cacheSettingId A unique integer value identifying the cache setting.
     * @param versionId The ULID identifier of the version.
     * @param [patchedCacheSettingRequest]
     */
    public partialUpdateCacheSetting2WithHttpInfo(applicationId: number, cacheSettingId: number, versionId: string, patchedCacheSettingRequest?: PatchedCacheSettingRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CacheSettingResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateCacheSetting2WithHttpInfo(applicationId, cacheSettingId, versionId, patchedCacheSettingRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Cache Setting without affecting other fields.
     * Partially update an Applications Cache Setting
     * @param applicationId A unique integer value identifying the application.
     * @param cacheSettingId A unique integer value identifying the cache setting.
     * @param versionId The ULID identifier of the version.
     * @param [patchedCacheSettingRequest]
     */
    public partialUpdateCacheSetting2(applicationId: number, cacheSettingId: number, versionId: string, patchedCacheSettingRequest?: PatchedCacheSettingRequest, _options?: PromiseConfigurationOptions): Promise<CacheSettingResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateCacheSetting2(applicationId, cacheSettingId, versionId, patchedCacheSettingRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Cache Setting in your account.
     * Retrieve details of an Applications Cache Setting
     * @param applicationId A unique integer value identifying the application.
     * @param cacheSettingId A unique integer value identifying the cache setting.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveCacheSettingWithHttpInfo(applicationId: number, cacheSettingId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CacheSettingResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveCacheSettingWithHttpInfo(applicationId, cacheSettingId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Cache Setting in your account.
     * Retrieve details of an Applications Cache Setting
     * @param applicationId A unique integer value identifying the application.
     * @param cacheSettingId A unique integer value identifying the cache setting.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveCacheSetting(applicationId: number, cacheSettingId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<CacheSettingResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveCacheSetting(applicationId, cacheSettingId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Cache Setting in your account.
     * Retrieve details of an Applications Cache Setting
     * @param applicationId A unique integer value identifying the application.
     * @param cacheSettingId A unique integer value identifying the cache setting.
     * @param versionId The ULID identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveCacheSetting2WithHttpInfo(applicationId: number, cacheSettingId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CacheSettingResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveCacheSetting2WithHttpInfo(applicationId, cacheSettingId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Cache Setting in your account.
     * Retrieve details of an Applications Cache Setting
     * @param applicationId A unique integer value identifying the application.
     * @param cacheSettingId A unique integer value identifying the cache setting.
     * @param versionId The ULID identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveCacheSetting2(applicationId: number, cacheSettingId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<CacheSettingResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveCacheSetting2(applicationId, cacheSettingId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Cache Setting. This replaces the entire Cache Setting with the new data provided.
     * Update an Applications Cache Setting
     * @param applicationId A unique integer value identifying the application.
     * @param cacheSettingId A unique integer value identifying the cache setting.
     * @param cacheSettingRequest
     */
    public updateCacheSettingWithHttpInfo(applicationId: number, cacheSettingId: number, cacheSettingRequest: CacheSettingRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CacheSettingResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCacheSettingWithHttpInfo(applicationId, cacheSettingId, cacheSettingRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Cache Setting. This replaces the entire Cache Setting with the new data provided.
     * Update an Applications Cache Setting
     * @param applicationId A unique integer value identifying the application.
     * @param cacheSettingId A unique integer value identifying the cache setting.
     * @param cacheSettingRequest
     */
    public updateCacheSetting(applicationId: number, cacheSettingId: number, cacheSettingRequest: CacheSettingRequest, _options?: PromiseConfigurationOptions): Promise<CacheSettingResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCacheSetting(applicationId, cacheSettingId, cacheSettingRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Cache Setting. This replaces the entire Cache Setting with the new data provided.
     * Update an Applications Cache Setting
     * @param applicationId A unique integer value identifying the application.
     * @param cacheSettingId A unique integer value identifying the cache setting.
     * @param versionId The ULID identifier of the version.
     * @param cacheSettingRequest
     */
    public updateCacheSetting2WithHttpInfo(applicationId: number, cacheSettingId: number, versionId: string, cacheSettingRequest: CacheSettingRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CacheSettingResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCacheSetting2WithHttpInfo(applicationId, cacheSettingId, versionId, cacheSettingRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Cache Setting. This replaces the entire Cache Setting with the new data provided.
     * Update an Applications Cache Setting
     * @param applicationId A unique integer value identifying the application.
     * @param cacheSettingId A unique integer value identifying the cache setting.
     * @param versionId The ULID identifier of the version.
     * @param cacheSettingRequest
     */
    public updateCacheSetting2(applicationId: number, cacheSettingId: number, versionId: string, cacheSettingRequest: CacheSettingRequest, _options?: PromiseConfigurationOptions): Promise<CacheSettingResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCacheSetting2(applicationId, cacheSettingId, versionId, cacheSettingRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableApplicationsDeviceGroupsApi } from './ObservableAPI';

import { ApplicationsDeviceGroupsApiRequestFactory, ApplicationsDeviceGroupsApiResponseProcessor} from "../apis/ApplicationsDeviceGroupsApi";
export class PromiseApplicationsDeviceGroupsApi {
    private api: ObservableApplicationsDeviceGroupsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationsDeviceGroupsApiRequestFactory,
        responseProcessor?: ApplicationsDeviceGroupsApiResponseProcessor
    ) {
        this.api = new ObservableApplicationsDeviceGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Device Group in your account.
     * Create an Applications Device Group
     * @param applicationId A unique integer value identifying the application.
     * @param deviceGroupRequest
     */
    public createDeviceGroupWithHttpInfo(applicationId: number, deviceGroupRequest: DeviceGroupRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceGroupResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDeviceGroupWithHttpInfo(applicationId, deviceGroupRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Device Group in your account.
     * Create an Applications Device Group
     * @param applicationId A unique integer value identifying the application.
     * @param deviceGroupRequest
     */
    public createDeviceGroup(applicationId: number, deviceGroupRequest: DeviceGroupRequest, _options?: PromiseConfigurationOptions): Promise<DeviceGroupResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDeviceGroup(applicationId, deviceGroupRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Device Group in your account.
     * Create an Applications Device Group
     * @param applicationId A unique integer value identifying the application.
     * @param versionId The ULID identifier of the version.
     * @param deviceGroupRequest
     */
    public createDeviceGroup2WithHttpInfo(applicationId: number, versionId: string, deviceGroupRequest: DeviceGroupRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceGroupResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDeviceGroup2WithHttpInfo(applicationId, versionId, deviceGroupRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Device Group in your account.
     * Create an Applications Device Group
     * @param applicationId A unique integer value identifying the application.
     * @param versionId The ULID identifier of the version.
     * @param deviceGroupRequest
     */
    public createDeviceGroup2(applicationId: number, versionId: string, deviceGroupRequest: DeviceGroupRequest, _options?: PromiseConfigurationOptions): Promise<DeviceGroupResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDeviceGroup2(applicationId, versionId, deviceGroupRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Device Group in your account.
     * Delete an Applications Device Group
     * @param applicationId A unique integer value identifying the application.
     * @param deviceGroupId A unique integer value identifying the device group.
     */
    public deleteDeviceGroupWithHttpInfo(applicationId: number, deviceGroupId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDeviceGroupWithHttpInfo(applicationId, deviceGroupId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Device Group in your account.
     * Delete an Applications Device Group
     * @param applicationId A unique integer value identifying the application.
     * @param deviceGroupId A unique integer value identifying the device group.
     */
    public deleteDeviceGroup(applicationId: number, deviceGroupId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDeviceGroup(applicationId, deviceGroupId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Device Group in your account.
     * Delete an Applications Device Group
     * @param applicationId A unique integer value identifying the application.
     * @param deviceGroupId A unique integer value identifying the device group.
     * @param versionId The ULID identifier of the version.
     */
    public deleteDeviceGroup2WithHttpInfo(applicationId: number, deviceGroupId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDeviceGroup2WithHttpInfo(applicationId, deviceGroupId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Device Group in your account.
     * Delete an Applications Device Group
     * @param applicationId A unique integer value identifying the application.
     * @param deviceGroupId A unique integer value identifying the device group.
     * @param versionId The ULID identifier of the version.
     */
    public deleteDeviceGroup2(applicationId: number, deviceGroupId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDeviceGroup2(applicationId, deviceGroupId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Device Groups owned by your account.
     * List Applications Device Groups
     * @param applicationId A unique integer value identifying the application.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     * @param [userAgent] Filter by user agent (case-insensitive, partial match).
     */
    public listDeviceGroupsWithHttpInfo(applicationId: number, fields?: string, id?: number, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, userAgent?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedDeviceGroupList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDeviceGroupsWithHttpInfo(applicationId, fields, id, name, ordering, page, pageSize, search, userAgent, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Device Groups owned by your account.
     * List Applications Device Groups
     * @param applicationId A unique integer value identifying the application.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     * @param [userAgent] Filter by user agent (case-insensitive, partial match).
     */
    public listDeviceGroups(applicationId: number, fields?: string, id?: number, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, userAgent?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedDeviceGroupList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDeviceGroups(applicationId, fields, id, name, ordering, page, pageSize, search, userAgent, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Device Groups owned by your account.
     * List Applications Device Groups
     * @param applicationId A unique integer value identifying the application.
     * @param versionId The ULID identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     * @param [userAgent] Filter by user agent (case-insensitive, partial match).
     */
    public listDeviceGroups2WithHttpInfo(applicationId: number, versionId: string, fields?: string, id?: number, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, userAgent?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedDeviceGroupList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDeviceGroups2WithHttpInfo(applicationId, versionId, fields, id, name, ordering, page, pageSize, search, userAgent, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Device Groups owned by your account.
     * List Applications Device Groups
     * @param applicationId A unique integer value identifying the application.
     * @param versionId The ULID identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     * @param [userAgent] Filter by user agent (case-insensitive, partial match).
     */
    public listDeviceGroups2(applicationId: number, versionId: string, fields?: string, id?: number, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, userAgent?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedDeviceGroupList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDeviceGroups2(applicationId, versionId, fields, id, name, ordering, page, pageSize, search, userAgent, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Device Group without affecting other fields.
     * Partially update an Applications Device Group
     * @param applicationId A unique integer value identifying the application.
     * @param deviceGroupId A unique integer value identifying the device group.
     * @param [patchedDeviceGroupRequest]
     */
    public partialUpdateDeviceGroupWithHttpInfo(applicationId: number, deviceGroupId: number, patchedDeviceGroupRequest?: PatchedDeviceGroupRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceGroupResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateDeviceGroupWithHttpInfo(applicationId, deviceGroupId, patchedDeviceGroupRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Device Group without affecting other fields.
     * Partially update an Applications Device Group
     * @param applicationId A unique integer value identifying the application.
     * @param deviceGroupId A unique integer value identifying the device group.
     * @param [patchedDeviceGroupRequest]
     */
    public partialUpdateDeviceGroup(applicationId: number, deviceGroupId: number, patchedDeviceGroupRequest?: PatchedDeviceGroupRequest, _options?: PromiseConfigurationOptions): Promise<DeviceGroupResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateDeviceGroup(applicationId, deviceGroupId, patchedDeviceGroupRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Device Group without affecting other fields.
     * Partially update an Applications Device Group
     * @param applicationId A unique integer value identifying the application.
     * @param deviceGroupId A unique integer value identifying the device group.
     * @param versionId The ULID identifier of the version.
     * @param [patchedDeviceGroupRequest]
     */
    public partialUpdateDeviceGroup2WithHttpInfo(applicationId: number, deviceGroupId: number, versionId: string, patchedDeviceGroupRequest?: PatchedDeviceGroupRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceGroupResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateDeviceGroup2WithHttpInfo(applicationId, deviceGroupId, versionId, patchedDeviceGroupRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Device Group without affecting other fields.
     * Partially update an Applications Device Group
     * @param applicationId A unique integer value identifying the application.
     * @param deviceGroupId A unique integer value identifying the device group.
     * @param versionId The ULID identifier of the version.
     * @param [patchedDeviceGroupRequest]
     */
    public partialUpdateDeviceGroup2(applicationId: number, deviceGroupId: number, versionId: string, patchedDeviceGroupRequest?: PatchedDeviceGroupRequest, _options?: PromiseConfigurationOptions): Promise<DeviceGroupResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateDeviceGroup2(applicationId, deviceGroupId, versionId, patchedDeviceGroupRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Device Group in your account.
     * Retrieve details of a Device Group
     * @param applicationId A unique integer value identifying the application.
     * @param deviceGroupId A unique integer value identifying the device group.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveDeviceGroupWithHttpInfo(applicationId: number, deviceGroupId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceGroupResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveDeviceGroupWithHttpInfo(applicationId, deviceGroupId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Device Group in your account.
     * Retrieve details of a Device Group
     * @param applicationId A unique integer value identifying the application.
     * @param deviceGroupId A unique integer value identifying the device group.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveDeviceGroup(applicationId: number, deviceGroupId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<DeviceGroupResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveDeviceGroup(applicationId, deviceGroupId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Device Group in your account.
     * Retrieve details of a Device Group
     * @param applicationId A unique integer value identifying the application.
     * @param deviceGroupId A unique integer value identifying the device group.
     * @param versionId The ULID identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveDeviceGroup2WithHttpInfo(applicationId: number, deviceGroupId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceGroupResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveDeviceGroup2WithHttpInfo(applicationId, deviceGroupId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Device Group in your account.
     * Retrieve details of a Device Group
     * @param applicationId A unique integer value identifying the application.
     * @param deviceGroupId A unique integer value identifying the device group.
     * @param versionId The ULID identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveDeviceGroup2(applicationId: number, deviceGroupId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<DeviceGroupResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveDeviceGroup2(applicationId, deviceGroupId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Device Group. This replaces the entire Device Group with the new data provided.
     * Update an Applications Device Group
     * @param applicationId A unique integer value identifying the application.
     * @param deviceGroupId A unique integer value identifying the device group.
     * @param deviceGroupRequest
     */
    public updateDeviceGroupWithHttpInfo(applicationId: number, deviceGroupId: number, deviceGroupRequest: DeviceGroupRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceGroupResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDeviceGroupWithHttpInfo(applicationId, deviceGroupId, deviceGroupRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Device Group. This replaces the entire Device Group with the new data provided.
     * Update an Applications Device Group
     * @param applicationId A unique integer value identifying the application.
     * @param deviceGroupId A unique integer value identifying the device group.
     * @param deviceGroupRequest
     */
    public updateDeviceGroup(applicationId: number, deviceGroupId: number, deviceGroupRequest: DeviceGroupRequest, _options?: PromiseConfigurationOptions): Promise<DeviceGroupResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDeviceGroup(applicationId, deviceGroupId, deviceGroupRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Device Group. This replaces the entire Device Group with the new data provided.
     * Update an Applications Device Group
     * @param applicationId A unique integer value identifying the application.
     * @param deviceGroupId A unique integer value identifying the device group.
     * @param versionId The ULID identifier of the version.
     * @param deviceGroupRequest
     */
    public updateDeviceGroup2WithHttpInfo(applicationId: number, deviceGroupId: number, versionId: string, deviceGroupRequest: DeviceGroupRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceGroupResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDeviceGroup2WithHttpInfo(applicationId, deviceGroupId, versionId, deviceGroupRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Device Group. This replaces the entire Device Group with the new data provided.
     * Update an Applications Device Group
     * @param applicationId A unique integer value identifying the application.
     * @param deviceGroupId A unique integer value identifying the device group.
     * @param versionId The ULID identifier of the version.
     * @param deviceGroupRequest
     */
    public updateDeviceGroup2(applicationId: number, deviceGroupId: number, versionId: string, deviceGroupRequest: DeviceGroupRequest, _options?: PromiseConfigurationOptions): Promise<DeviceGroupResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDeviceGroup2(applicationId, deviceGroupId, versionId, deviceGroupRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableApplicationsFunctionApi } from './ObservableAPI';

import { ApplicationsFunctionApiRequestFactory, ApplicationsFunctionApiResponseProcessor} from "../apis/ApplicationsFunctionApi";
export class PromiseApplicationsFunctionApi {
    private api: ObservableApplicationsFunctionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationsFunctionApiRequestFactory,
        responseProcessor?: ApplicationsFunctionApiResponseProcessor
    ) {
        this.api = new ObservableApplicationsFunctionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Function Instance for a specific Application in your account.
     * Create an Application Function Instance
     * @param applicationId A unique integer value identifying the application.
     * @param functionInstanceRequest
     */
    public createApplicationFunctionInstanceWithHttpInfo(applicationId: number, functionInstanceRequest: FunctionInstanceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FunctionInstanceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createApplicationFunctionInstanceWithHttpInfo(applicationId, functionInstanceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Function Instance for a specific Application in your account.
     * Create an Application Function Instance
     * @param applicationId A unique integer value identifying the application.
     * @param functionInstanceRequest
     */
    public createApplicationFunctionInstance(applicationId: number, functionInstanceRequest: FunctionInstanceRequest, _options?: PromiseConfigurationOptions): Promise<FunctionInstanceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createApplicationFunctionInstance(applicationId, functionInstanceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Function Instance for a specific Application in your account.
     * Create an Application Function Instance
     * @param applicationId A unique integer value identifying the application.
     * @param versionId The ULID identifier of the version.
     * @param functionInstanceRequest
     */
    public createApplicationFunctionInstance2WithHttpInfo(applicationId: number, versionId: string, functionInstanceRequest: FunctionInstanceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FunctionInstanceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createApplicationFunctionInstance2WithHttpInfo(applicationId, versionId, functionInstanceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Function Instance for a specific Application in your account.
     * Create an Application Function Instance
     * @param applicationId A unique integer value identifying the application.
     * @param versionId The ULID identifier of the version.
     * @param functionInstanceRequest
     */
    public createApplicationFunctionInstance2(applicationId: number, versionId: string, functionInstanceRequest: FunctionInstanceRequest, _options?: PromiseConfigurationOptions): Promise<FunctionInstanceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createApplicationFunctionInstance2(applicationId, versionId, functionInstanceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Application Function Instance in your account.
     * Delete an Application Function Instance
     * @param applicationId A unique integer value identifying the application.
     * @param functionId A unique integer value identifying the function instance.
     */
    public deleteApplicationFunctionInstanceWithHttpInfo(applicationId: number, functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteApplicationFunctionInstanceWithHttpInfo(applicationId, functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Application Function Instance in your account.
     * Delete an Application Function Instance
     * @param applicationId A unique integer value identifying the application.
     * @param functionId A unique integer value identifying the function instance.
     */
    public deleteApplicationFunctionInstance(applicationId: number, functionId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteApplicationFunctionInstance(applicationId, functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Application Function Instance in your account.
     * Delete an Application Function Instance
     * @param applicationId A unique integer value identifying the application.
     * @param functionId A unique integer value identifying the function instance.
     * @param versionId The ULID identifier of the version.
     */
    public deleteApplicationFunctionInstance2WithHttpInfo(applicationId: number, functionId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteApplicationFunctionInstance2WithHttpInfo(applicationId, functionId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Application Function Instance in your account.
     * Delete an Application Function Instance
     * @param applicationId A unique integer value identifying the application.
     * @param functionId A unique integer value identifying the function instance.
     * @param versionId The ULID identifier of the version.
     */
    public deleteApplicationFunctionInstance2(applicationId: number, functionId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteApplicationFunctionInstance2(applicationId, functionId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Function Instances for a specific Application owned by your account.
     * List Function Instances
     * @param applicationId A unique integer value identifying the application.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listApplicationFunctionInstancesWithHttpInfo(applicationId: number, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedFunctionInstanceList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listApplicationFunctionInstancesWithHttpInfo(applicationId, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Function Instances for a specific Application owned by your account.
     * List Function Instances
     * @param applicationId A unique integer value identifying the application.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listApplicationFunctionInstances(applicationId: number, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedFunctionInstanceList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listApplicationFunctionInstances(applicationId, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Function Instances for a specific Application owned by your account.
     * List Function Instances
     * @param applicationId A unique integer value identifying the application.
     * @param versionId The ULID identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listApplicationFunctionInstances2WithHttpInfo(applicationId: number, versionId: string, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedFunctionInstanceList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listApplicationFunctionInstances2WithHttpInfo(applicationId, versionId, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Function Instances for a specific Application owned by your account.
     * List Function Instances
     * @param applicationId A unique integer value identifying the application.
     * @param versionId The ULID identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listApplicationFunctionInstances2(applicationId: number, versionId: string, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedFunctionInstanceList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listApplicationFunctionInstances2(applicationId, versionId, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Application Function Instance without affecting other fields.
     * Partially update an Application Function Instance
     * @param applicationId A unique integer value identifying the application.
     * @param functionId A unique integer value identifying the function instance.
     * @param [patchedFunctionInstanceRequest]
     */
    public partialUpdateApplicationFunctionInstanceWithHttpInfo(applicationId: number, functionId: number, patchedFunctionInstanceRequest?: PatchedFunctionInstanceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FunctionInstanceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateApplicationFunctionInstanceWithHttpInfo(applicationId, functionId, patchedFunctionInstanceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Application Function Instance without affecting other fields.
     * Partially update an Application Function Instance
     * @param applicationId A unique integer value identifying the application.
     * @param functionId A unique integer value identifying the function instance.
     * @param [patchedFunctionInstanceRequest]
     */
    public partialUpdateApplicationFunctionInstance(applicationId: number, functionId: number, patchedFunctionInstanceRequest?: PatchedFunctionInstanceRequest, _options?: PromiseConfigurationOptions): Promise<FunctionInstanceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateApplicationFunctionInstance(applicationId, functionId, patchedFunctionInstanceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Application Function Instance without affecting other fields.
     * Partially update an Application Function Instance
     * @param applicationId A unique integer value identifying the application.
     * @param functionId A unique integer value identifying the function instance.
     * @param versionId The ULID identifier of the version.
     * @param [patchedFunctionInstanceRequest]
     */
    public partialUpdateApplicationFunctionInstance2WithHttpInfo(applicationId: number, functionId: number, versionId: string, patchedFunctionInstanceRequest?: PatchedFunctionInstanceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FunctionInstanceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateApplicationFunctionInstance2WithHttpInfo(applicationId, functionId, versionId, patchedFunctionInstanceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Application Function Instance without affecting other fields.
     * Partially update an Application Function Instance
     * @param applicationId A unique integer value identifying the application.
     * @param functionId A unique integer value identifying the function instance.
     * @param versionId The ULID identifier of the version.
     * @param [patchedFunctionInstanceRequest]
     */
    public partialUpdateApplicationFunctionInstance2(applicationId: number, functionId: number, versionId: string, patchedFunctionInstanceRequest?: PatchedFunctionInstanceRequest, _options?: PromiseConfigurationOptions): Promise<FunctionInstanceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateApplicationFunctionInstance2(applicationId, functionId, versionId, patchedFunctionInstanceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Application Function Instance in your account.
     * Retrieve details of an Application Function Instance
     * @param applicationId A unique integer value identifying the application.
     * @param functionId A unique integer value identifying the function instance.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveApplicationFunctionInstanceWithHttpInfo(applicationId: number, functionId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FunctionInstanceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveApplicationFunctionInstanceWithHttpInfo(applicationId, functionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Application Function Instance in your account.
     * Retrieve details of an Application Function Instance
     * @param applicationId A unique integer value identifying the application.
     * @param functionId A unique integer value identifying the function instance.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveApplicationFunctionInstance(applicationId: number, functionId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<FunctionInstanceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveApplicationFunctionInstance(applicationId, functionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Application Function Instance in your account.
     * Retrieve details of an Application Function Instance
     * @param applicationId A unique integer value identifying the application.
     * @param functionId A unique integer value identifying the function instance.
     * @param versionId The ULID identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveApplicationFunctionInstance2WithHttpInfo(applicationId: number, functionId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FunctionInstanceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveApplicationFunctionInstance2WithHttpInfo(applicationId, functionId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Application Function Instance in your account.
     * Retrieve details of an Application Function Instance
     * @param applicationId A unique integer value identifying the application.
     * @param functionId A unique integer value identifying the function instance.
     * @param versionId The ULID identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveApplicationFunctionInstance2(applicationId: number, functionId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<FunctionInstanceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveApplicationFunctionInstance2(applicationId, functionId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Application Function Instance. This replaces the entire Function Instance with the new data provided.
     * Update an Application Function Instance
     * @param applicationId A unique integer value identifying the application.
     * @param functionId A unique integer value identifying the function instance.
     * @param functionInstanceRequest
     */
    public updateApplicationFunctionInstanceWithHttpInfo(applicationId: number, functionId: number, functionInstanceRequest: FunctionInstanceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FunctionInstanceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateApplicationFunctionInstanceWithHttpInfo(applicationId, functionId, functionInstanceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Application Function Instance. This replaces the entire Function Instance with the new data provided.
     * Update an Application Function Instance
     * @param applicationId A unique integer value identifying the application.
     * @param functionId A unique integer value identifying the function instance.
     * @param functionInstanceRequest
     */
    public updateApplicationFunctionInstance(applicationId: number, functionId: number, functionInstanceRequest: FunctionInstanceRequest, _options?: PromiseConfigurationOptions): Promise<FunctionInstanceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateApplicationFunctionInstance(applicationId, functionId, functionInstanceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Application Function Instance. This replaces the entire Function Instance with the new data provided.
     * Update an Application Function Instance
     * @param applicationId A unique integer value identifying the application.
     * @param functionId A unique integer value identifying the function instance.
     * @param versionId The ULID identifier of the version.
     * @param functionInstanceRequest
     */
    public updateApplicationFunctionInstance2WithHttpInfo(applicationId: number, functionId: number, versionId: string, functionInstanceRequest: FunctionInstanceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FunctionInstanceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateApplicationFunctionInstance2WithHttpInfo(applicationId, functionId, versionId, functionInstanceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Application Function Instance. This replaces the entire Function Instance with the new data provided.
     * Update an Application Function Instance
     * @param applicationId A unique integer value identifying the application.
     * @param functionId A unique integer value identifying the function instance.
     * @param versionId The ULID identifier of the version.
     * @param functionInstanceRequest
     */
    public updateApplicationFunctionInstance2(applicationId: number, functionId: number, versionId: string, functionInstanceRequest: FunctionInstanceRequest, _options?: PromiseConfigurationOptions): Promise<FunctionInstanceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateApplicationFunctionInstance2(applicationId, functionId, versionId, functionInstanceRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableApplicationsRequestRulesApi } from './ObservableAPI';

import { ApplicationsRequestRulesApiRequestFactory, ApplicationsRequestRulesApiResponseProcessor} from "../apis/ApplicationsRequestRulesApi";
export class PromiseApplicationsRequestRulesApi {
    private api: ObservableApplicationsRequestRulesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationsRequestRulesApiRequestFactory,
        responseProcessor?: ApplicationsRequestRulesApiResponseProcessor
    ) {
        this.api = new ObservableApplicationsRequestRulesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Rule for a specific Application in your account.
     * Create an Application Request Rule
     * @param applicationId A unique integer value identifying the application.
     * @param requestPhaseRuleRequest
     */
    public createApplicationRequestRuleWithHttpInfo(applicationId: number, requestPhaseRuleRequest: RequestPhaseRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RequestPhaseRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createApplicationRequestRuleWithHttpInfo(applicationId, requestPhaseRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Rule for a specific Application in your account.
     * Create an Application Request Rule
     * @param applicationId A unique integer value identifying the application.
     * @param requestPhaseRuleRequest
     */
    public createApplicationRequestRule(applicationId: number, requestPhaseRuleRequest: RequestPhaseRuleRequest, _options?: PromiseConfigurationOptions): Promise<RequestPhaseRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createApplicationRequestRule(applicationId, requestPhaseRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Rule for a specific Application in your account.
     * Create an Application Request Rule
     * @param applicationId A unique integer value identifying the application.
     * @param versionId The ULID identifier of the version.
     * @param requestPhaseRuleRequest
     */
    public createApplicationRequestRule2WithHttpInfo(applicationId: number, versionId: string, requestPhaseRuleRequest: RequestPhaseRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RequestPhaseRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createApplicationRequestRule2WithHttpInfo(applicationId, versionId, requestPhaseRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Rule for a specific Application in your account.
     * Create an Application Request Rule
     * @param applicationId A unique integer value identifying the application.
     * @param versionId The ULID identifier of the version.
     * @param requestPhaseRuleRequest
     */
    public createApplicationRequestRule2(applicationId: number, versionId: string, requestPhaseRuleRequest: RequestPhaseRuleRequest, _options?: PromiseConfigurationOptions): Promise<RequestPhaseRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createApplicationRequestRule2(applicationId, versionId, requestPhaseRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Rule in your account.
     * Delete an Application Request Rule
     * @param applicationId A unique integer value identifying the application.
     * @param requestRuleId A unique integer value identifying the request rule.
     */
    public deleteApplicationRequestRuleWithHttpInfo(applicationId: number, requestRuleId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteApplicationRequestRuleWithHttpInfo(applicationId, requestRuleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Rule in your account.
     * Delete an Application Request Rule
     * @param applicationId A unique integer value identifying the application.
     * @param requestRuleId A unique integer value identifying the request rule.
     */
    public deleteApplicationRequestRule(applicationId: number, requestRuleId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteApplicationRequestRule(applicationId, requestRuleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Rule in your account.
     * Delete an Application Request Rule
     * @param applicationId A unique integer value identifying the application.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param versionId The ULID identifier of the version.
     */
    public deleteApplicationRequestRule2WithHttpInfo(applicationId: number, requestRuleId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteApplicationRequestRule2WithHttpInfo(applicationId, requestRuleId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Rule in your account.
     * Delete an Application Request Rule
     * @param applicationId A unique integer value identifying the application.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param versionId The ULID identifier of the version.
     */
    public deleteApplicationRequestRule2(applicationId: number, requestRuleId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteApplicationRequestRule2(applicationId, requestRuleId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Rules for a specific Application owned by your account.
     * List Application Request Rules
     * @param applicationId A unique integer value identifying the application.
     * @param [description] Filter by description (case-insensitive, partial match).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [orderGte] Filter by order (greater than or equal).
     * @param [orderLte] Filter by order (less than or equal).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listApplicationRequestRulesWithHttpInfo(applicationId: number, description?: string, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, orderGte?: number, orderLte?: number, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedRequestPhaseRuleList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listApplicationRequestRulesWithHttpInfo(applicationId, description, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, orderGte, orderLte, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Rules for a specific Application owned by your account.
     * List Application Request Rules
     * @param applicationId A unique integer value identifying the application.
     * @param [description] Filter by description (case-insensitive, partial match).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [orderGte] Filter by order (greater than or equal).
     * @param [orderLte] Filter by order (less than or equal).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listApplicationRequestRules(applicationId: number, description?: string, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, orderGte?: number, orderLte?: number, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedRequestPhaseRuleList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listApplicationRequestRules(applicationId, description, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, orderGte, orderLte, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Rules for a specific Application owned by your account.
     * List Application Request Rules
     * @param applicationId A unique integer value identifying the application.
     * @param versionId The ULID identifier of the version.
     * @param [description] Filter by description (case-insensitive, partial match).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [orderGte] Filter by order (greater than or equal).
     * @param [orderLte] Filter by order (less than or equal).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listApplicationRequestRules2WithHttpInfo(applicationId: number, versionId: string, description?: string, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, orderGte?: number, orderLte?: number, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedRequestPhaseRuleList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listApplicationRequestRules2WithHttpInfo(applicationId, versionId, description, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, orderGte, orderLte, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Rules for a specific Application owned by your account.
     * List Application Request Rules
     * @param applicationId A unique integer value identifying the application.
     * @param versionId The ULID identifier of the version.
     * @param [description] Filter by description (case-insensitive, partial match).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [orderGte] Filter by order (greater than or equal).
     * @param [orderLte] Filter by order (less than or equal).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listApplicationRequestRules2(applicationId: number, versionId: string, description?: string, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, orderGte?: number, orderLte?: number, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedRequestPhaseRuleList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listApplicationRequestRules2(applicationId, versionId, description, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, orderGte, orderLte, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Application Rule  without affecting other fields.
     * Partially update an Application Request Rule
     * @param applicationId A unique integer value identifying the application.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param [patchedRequestPhaseRule]
     */
    public partialUpdateApplicationRequestRuleWithHttpInfo(applicationId: number, requestRuleId: number, patchedRequestPhaseRule?: PatchedRequestPhaseRule, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RequestPhaseRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateApplicationRequestRuleWithHttpInfo(applicationId, requestRuleId, patchedRequestPhaseRule, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Application Rule  without affecting other fields.
     * Partially update an Application Request Rule
     * @param applicationId A unique integer value identifying the application.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param [patchedRequestPhaseRule]
     */
    public partialUpdateApplicationRequestRule(applicationId: number, requestRuleId: number, patchedRequestPhaseRule?: PatchedRequestPhaseRule, _options?: PromiseConfigurationOptions): Promise<RequestPhaseRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateApplicationRequestRule(applicationId, requestRuleId, patchedRequestPhaseRule, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Application Rule  without affecting other fields.
     * Partially update an Application Request Rule
     * @param applicationId A unique integer value identifying the application.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param versionId The ULID identifier of the version.
     * @param [patchedRequestPhaseRule]
     */
    public partialUpdateApplicationRequestRule2WithHttpInfo(applicationId: number, requestRuleId: number, versionId: string, patchedRequestPhaseRule?: PatchedRequestPhaseRule, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RequestPhaseRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateApplicationRequestRule2WithHttpInfo(applicationId, requestRuleId, versionId, patchedRequestPhaseRule, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Application Rule  without affecting other fields.
     * Partially update an Application Request Rule
     * @param applicationId A unique integer value identifying the application.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param versionId The ULID identifier of the version.
     * @param [patchedRequestPhaseRule]
     */
    public partialUpdateApplicationRequestRule2(applicationId: number, requestRuleId: number, versionId: string, patchedRequestPhaseRule?: PatchedRequestPhaseRule, _options?: PromiseConfigurationOptions): Promise<RequestPhaseRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateApplicationRequestRule2(applicationId, requestRuleId, versionId, patchedRequestPhaseRule, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Rule in your account.
     * Retrieve details of an Application Request Rule
     * @param applicationId A unique integer value identifying the application.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveApplicationRequestRuleWithHttpInfo(applicationId: number, requestRuleId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponsePhaseRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveApplicationRequestRuleWithHttpInfo(applicationId, requestRuleId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Rule in your account.
     * Retrieve details of an Application Request Rule
     * @param applicationId A unique integer value identifying the application.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveApplicationRequestRule(applicationId: number, requestRuleId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<ResponsePhaseRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveApplicationRequestRule(applicationId, requestRuleId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Rule in your account.
     * Retrieve details of an Application Request Rule
     * @param applicationId A unique integer value identifying the application.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param versionId The ULID identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveApplicationRequestRule2WithHttpInfo(applicationId: number, requestRuleId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponsePhaseRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveApplicationRequestRule2WithHttpInfo(applicationId, requestRuleId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Rule in your account.
     * Retrieve details of an Application Request Rule
     * @param applicationId A unique integer value identifying the application.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param versionId The ULID identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveApplicationRequestRule2(applicationId: number, requestRuleId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<ResponsePhaseRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveApplicationRequestRule2(applicationId, requestRuleId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Rule. This replaces the entire Rule with the new data provided.
     * Update an Application Request Rule
     * @param applicationId A unique integer value identifying the application.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param requestPhaseRuleRequest
     */
    public updateApplicationRequestRuleWithHttpInfo(applicationId: number, requestRuleId: number, requestPhaseRuleRequest: RequestPhaseRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RequestPhaseRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateApplicationRequestRuleWithHttpInfo(applicationId, requestRuleId, requestPhaseRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Rule. This replaces the entire Rule with the new data provided.
     * Update an Application Request Rule
     * @param applicationId A unique integer value identifying the application.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param requestPhaseRuleRequest
     */
    public updateApplicationRequestRule(applicationId: number, requestRuleId: number, requestPhaseRuleRequest: RequestPhaseRuleRequest, _options?: PromiseConfigurationOptions): Promise<RequestPhaseRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateApplicationRequestRule(applicationId, requestRuleId, requestPhaseRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Rule. This replaces the entire Rule with the new data provided.
     * Update an Application Request Rule
     * @param applicationId A unique integer value identifying the application.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param versionId The ULID identifier of the version.
     * @param requestPhaseRuleRequest
     */
    public updateApplicationRequestRule2WithHttpInfo(applicationId: number, requestRuleId: number, versionId: string, requestPhaseRuleRequest: RequestPhaseRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RequestPhaseRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateApplicationRequestRule2WithHttpInfo(applicationId, requestRuleId, versionId, requestPhaseRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Rule. This replaces the entire Rule with the new data provided.
     * Update an Application Request Rule
     * @param applicationId A unique integer value identifying the application.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param versionId The ULID identifier of the version.
     * @param requestPhaseRuleRequest
     */
    public updateApplicationRequestRule2(applicationId: number, requestRuleId: number, versionId: string, requestPhaseRuleRequest: RequestPhaseRuleRequest, _options?: PromiseConfigurationOptions): Promise<RequestPhaseRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateApplicationRequestRule2(applicationId, requestRuleId, versionId, requestPhaseRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Reorder all Rules for a specific Application owned by your account.
     * Ordering Application Request Rules
     * @param applicationId A unique integer value identifying the application.
     * @param applicationRequestPhaseRuleEngineOrder
     * @param [search] A search term.
     */
    public updateApplicationRequestRulesOrderWithHttpInfo(applicationId: number, applicationRequestPhaseRuleEngineOrder: ApplicationRequestPhaseRuleEngineOrder, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedRequestPhaseRuleList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateApplicationRequestRulesOrderWithHttpInfo(applicationId, applicationRequestPhaseRuleEngineOrder, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Reorder all Rules for a specific Application owned by your account.
     * Ordering Application Request Rules
     * @param applicationId A unique integer value identifying the application.
     * @param applicationRequestPhaseRuleEngineOrder
     * @param [search] A search term.
     */
    public updateApplicationRequestRulesOrder(applicationId: number, applicationRequestPhaseRuleEngineOrder: ApplicationRequestPhaseRuleEngineOrder, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedRequestPhaseRuleList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateApplicationRequestRulesOrder(applicationId, applicationRequestPhaseRuleEngineOrder, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Reorder all Rules for a specific Application owned by your account.
     * Ordering Application Request Rules
     * @param applicationId A unique integer value identifying the application.
     * @param versionId The ULID identifier of the version.
     * @param applicationRequestPhaseRuleEngineOrder
     * @param [search] A search term.
     */
    public updateApplicationRequestRulesOrder2WithHttpInfo(applicationId: number, versionId: string, applicationRequestPhaseRuleEngineOrder: ApplicationRequestPhaseRuleEngineOrder, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedRequestPhaseRuleList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateApplicationRequestRulesOrder2WithHttpInfo(applicationId, versionId, applicationRequestPhaseRuleEngineOrder, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Reorder all Rules for a specific Application owned by your account.
     * Ordering Application Request Rules
     * @param applicationId A unique integer value identifying the application.
     * @param versionId The ULID identifier of the version.
     * @param applicationRequestPhaseRuleEngineOrder
     * @param [search] A search term.
     */
    public updateApplicationRequestRulesOrder2(applicationId: number, versionId: string, applicationRequestPhaseRuleEngineOrder: ApplicationRequestPhaseRuleEngineOrder, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedRequestPhaseRuleList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateApplicationRequestRulesOrder2(applicationId, versionId, applicationRequestPhaseRuleEngineOrder, search, observableOptions);
        return result.toPromise();
    }


}



import { ObservableApplicationsResponseRulesApi } from './ObservableAPI';

import { ApplicationsResponseRulesApiRequestFactory, ApplicationsResponseRulesApiResponseProcessor} from "../apis/ApplicationsResponseRulesApi";
export class PromiseApplicationsResponseRulesApi {
    private api: ObservableApplicationsResponseRulesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationsResponseRulesApiRequestFactory,
        responseProcessor?: ApplicationsResponseRulesApiResponseProcessor
    ) {
        this.api = new ObservableApplicationsResponseRulesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Rule for a specific Application in your account.
     * Create an Application Response Rule
     * @param applicationId A unique integer value identifying the application.
     * @param responsePhaseRuleRequest
     */
    public createApplicationResponseRuleWithHttpInfo(applicationId: number, responsePhaseRuleRequest: ResponsePhaseRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponsePhaseRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createApplicationResponseRuleWithHttpInfo(applicationId, responsePhaseRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Rule for a specific Application in your account.
     * Create an Application Response Rule
     * @param applicationId A unique integer value identifying the application.
     * @param responsePhaseRuleRequest
     */
    public createApplicationResponseRule(applicationId: number, responsePhaseRuleRequest: ResponsePhaseRuleRequest, _options?: PromiseConfigurationOptions): Promise<ResponsePhaseRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createApplicationResponseRule(applicationId, responsePhaseRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Rule for a specific Application in your account.
     * Create an Application Response Rule
     * @param applicationId A unique integer value identifying the application.
     * @param versionId The ULID identifier of the version.
     * @param responsePhaseRuleRequest
     */
    public createApplicationResponseRule2WithHttpInfo(applicationId: number, versionId: string, responsePhaseRuleRequest: ResponsePhaseRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponsePhaseRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createApplicationResponseRule2WithHttpInfo(applicationId, versionId, responsePhaseRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Rule for a specific Application in your account.
     * Create an Application Response Rule
     * @param applicationId A unique integer value identifying the application.
     * @param versionId The ULID identifier of the version.
     * @param responsePhaseRuleRequest
     */
    public createApplicationResponseRule2(applicationId: number, versionId: string, responsePhaseRuleRequest: ResponsePhaseRuleRequest, _options?: PromiseConfigurationOptions): Promise<ResponsePhaseRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createApplicationResponseRule2(applicationId, versionId, responsePhaseRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Rule in your account.
     * Delete an Application Response Rule
     * @param applicationId A unique integer value identifying the application.
     * @param responseRuleId A unique integer value identifying the response rule.
     */
    public deleteApplicationResponseRuleWithHttpInfo(applicationId: number, responseRuleId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteApplicationResponseRuleWithHttpInfo(applicationId, responseRuleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Rule in your account.
     * Delete an Application Response Rule
     * @param applicationId A unique integer value identifying the application.
     * @param responseRuleId A unique integer value identifying the response rule.
     */
    public deleteApplicationResponseRule(applicationId: number, responseRuleId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteApplicationResponseRule(applicationId, responseRuleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Rule in your account.
     * Delete an Application Response Rule
     * @param applicationId A unique integer value identifying the application.
     * @param responseRuleId A unique integer value identifying the response rule.
     * @param versionId The ULID identifier of the version.
     */
    public deleteApplicationResponseRule2WithHttpInfo(applicationId: number, responseRuleId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteApplicationResponseRule2WithHttpInfo(applicationId, responseRuleId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Rule in your account.
     * Delete an Application Response Rule
     * @param applicationId A unique integer value identifying the application.
     * @param responseRuleId A unique integer value identifying the response rule.
     * @param versionId The ULID identifier of the version.
     */
    public deleteApplicationResponseRule2(applicationId: number, responseRuleId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteApplicationResponseRule2(applicationId, responseRuleId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Rules for a specific Application owned by your account.
     * List Application Response Rules
     * @param applicationId A unique integer value identifying the application.
     * @param [description] Filter by description (case-insensitive, partial match).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [orderGte] Filter by order (greater than or equal).
     * @param [orderLte] Filter by order (less than or equal).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listApplicationResponseRulesWithHttpInfo(applicationId: number, description?: string, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, orderGte?: number, orderLte?: number, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedResponsePhaseRuleList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listApplicationResponseRulesWithHttpInfo(applicationId, description, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, orderGte, orderLte, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Rules for a specific Application owned by your account.
     * List Application Response Rules
     * @param applicationId A unique integer value identifying the application.
     * @param [description] Filter by description (case-insensitive, partial match).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [orderGte] Filter by order (greater than or equal).
     * @param [orderLte] Filter by order (less than or equal).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listApplicationResponseRules(applicationId: number, description?: string, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, orderGte?: number, orderLte?: number, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedResponsePhaseRuleList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listApplicationResponseRules(applicationId, description, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, orderGte, orderLte, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Rules for a specific Application owned by your account.
     * List Application Response Rules
     * @param applicationId A unique integer value identifying the application.
     * @param versionId The ULID identifier of the version.
     * @param [description] Filter by description (case-insensitive, partial match).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [orderGte] Filter by order (greater than or equal).
     * @param [orderLte] Filter by order (less than or equal).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listApplicationResponseRules2WithHttpInfo(applicationId: number, versionId: string, description?: string, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, orderGte?: number, orderLte?: number, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedResponsePhaseRuleList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listApplicationResponseRules2WithHttpInfo(applicationId, versionId, description, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, orderGte, orderLte, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Rules for a specific Application owned by your account.
     * List Application Response Rules
     * @param applicationId A unique integer value identifying the application.
     * @param versionId The ULID identifier of the version.
     * @param [description] Filter by description (case-insensitive, partial match).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [orderGte] Filter by order (greater than or equal).
     * @param [orderLte] Filter by order (less than or equal).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listApplicationResponseRules2(applicationId: number, versionId: string, description?: string, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, orderGte?: number, orderLte?: number, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedResponsePhaseRuleList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listApplicationResponseRules2(applicationId, versionId, description, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, orderGte, orderLte, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Application Rule  without affecting other fields.
     * Partially update an Application Response Rule
     * @param applicationId A unique integer value identifying the application.
     * @param responseRuleId A unique integer value identifying the response rule.
     * @param [patchedResponsePhaseRuleRequest]
     */
    public partialUpdateApplicationResponseRuleWithHttpInfo(applicationId: number, responseRuleId: number, patchedResponsePhaseRuleRequest?: PatchedResponsePhaseRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponsePhaseRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateApplicationResponseRuleWithHttpInfo(applicationId, responseRuleId, patchedResponsePhaseRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Application Rule  without affecting other fields.
     * Partially update an Application Response Rule
     * @param applicationId A unique integer value identifying the application.
     * @param responseRuleId A unique integer value identifying the response rule.
     * @param [patchedResponsePhaseRuleRequest]
     */
    public partialUpdateApplicationResponseRule(applicationId: number, responseRuleId: number, patchedResponsePhaseRuleRequest?: PatchedResponsePhaseRuleRequest, _options?: PromiseConfigurationOptions): Promise<ResponsePhaseRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateApplicationResponseRule(applicationId, responseRuleId, patchedResponsePhaseRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Application Rule  without affecting other fields.
     * Partially update an Application Response Rule
     * @param applicationId A unique integer value identifying the application.
     * @param responseRuleId A unique integer value identifying the response rule.
     * @param versionId The ULID identifier of the version.
     * @param [patchedResponsePhaseRuleRequest]
     */
    public partialUpdateApplicationResponseRule2WithHttpInfo(applicationId: number, responseRuleId: number, versionId: string, patchedResponsePhaseRuleRequest?: PatchedResponsePhaseRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponsePhaseRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateApplicationResponseRule2WithHttpInfo(applicationId, responseRuleId, versionId, patchedResponsePhaseRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Application Rule  without affecting other fields.
     * Partially update an Application Response Rule
     * @param applicationId A unique integer value identifying the application.
     * @param responseRuleId A unique integer value identifying the response rule.
     * @param versionId The ULID identifier of the version.
     * @param [patchedResponsePhaseRuleRequest]
     */
    public partialUpdateApplicationResponseRule2(applicationId: number, responseRuleId: number, versionId: string, patchedResponsePhaseRuleRequest?: PatchedResponsePhaseRuleRequest, _options?: PromiseConfigurationOptions): Promise<ResponsePhaseRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateApplicationResponseRule2(applicationId, responseRuleId, versionId, patchedResponsePhaseRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Rule in your account.
     * Retrieve details of an Application Response Rule
     * @param applicationId A unique integer value identifying the application.
     * @param responseRuleId A unique integer value identifying the response rule.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveApplicationResponseRuleWithHttpInfo(applicationId: number, responseRuleId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponsePhaseRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveApplicationResponseRuleWithHttpInfo(applicationId, responseRuleId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Rule in your account.
     * Retrieve details of an Application Response Rule
     * @param applicationId A unique integer value identifying the application.
     * @param responseRuleId A unique integer value identifying the response rule.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveApplicationResponseRule(applicationId: number, responseRuleId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<ResponsePhaseRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveApplicationResponseRule(applicationId, responseRuleId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Rule in your account.
     * Retrieve details of an Application Response Rule
     * @param applicationId A unique integer value identifying the application.
     * @param responseRuleId A unique integer value identifying the response rule.
     * @param versionId The ULID identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveApplicationResponseRule2WithHttpInfo(applicationId: number, responseRuleId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponsePhaseRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveApplicationResponseRule2WithHttpInfo(applicationId, responseRuleId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Rule in your account.
     * Retrieve details of an Application Response Rule
     * @param applicationId A unique integer value identifying the application.
     * @param responseRuleId A unique integer value identifying the response rule.
     * @param versionId The ULID identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveApplicationResponseRule2(applicationId: number, responseRuleId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<ResponsePhaseRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveApplicationResponseRule2(applicationId, responseRuleId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Rule. This replaces the entire Rule with the new data provided.
     * Update an Application Response Rule
     * @param applicationId A unique integer value identifying the application.
     * @param responseRuleId A unique integer value identifying the response rule.
     * @param responsePhaseRuleRequest
     */
    public updateApplicationResponseRuleWithHttpInfo(applicationId: number, responseRuleId: number, responsePhaseRuleRequest: ResponsePhaseRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponsePhaseRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateApplicationResponseRuleWithHttpInfo(applicationId, responseRuleId, responsePhaseRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Rule. This replaces the entire Rule with the new data provided.
     * Update an Application Response Rule
     * @param applicationId A unique integer value identifying the application.
     * @param responseRuleId A unique integer value identifying the response rule.
     * @param responsePhaseRuleRequest
     */
    public updateApplicationResponseRule(applicationId: number, responseRuleId: number, responsePhaseRuleRequest: ResponsePhaseRuleRequest, _options?: PromiseConfigurationOptions): Promise<ResponsePhaseRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateApplicationResponseRule(applicationId, responseRuleId, responsePhaseRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Rule. This replaces the entire Rule with the new data provided.
     * Update an Application Response Rule
     * @param applicationId A unique integer value identifying the application.
     * @param responseRuleId A unique integer value identifying the response rule.
     * @param versionId The ULID identifier of the version.
     * @param responsePhaseRuleRequest
     */
    public updateApplicationResponseRule2WithHttpInfo(applicationId: number, responseRuleId: number, versionId: string, responsePhaseRuleRequest: ResponsePhaseRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponsePhaseRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateApplicationResponseRule2WithHttpInfo(applicationId, responseRuleId, versionId, responsePhaseRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Rule. This replaces the entire Rule with the new data provided.
     * Update an Application Response Rule
     * @param applicationId A unique integer value identifying the application.
     * @param responseRuleId A unique integer value identifying the response rule.
     * @param versionId The ULID identifier of the version.
     * @param responsePhaseRuleRequest
     */
    public updateApplicationResponseRule2(applicationId: number, responseRuleId: number, versionId: string, responsePhaseRuleRequest: ResponsePhaseRuleRequest, _options?: PromiseConfigurationOptions): Promise<ResponsePhaseRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateApplicationResponseRule2(applicationId, responseRuleId, versionId, responsePhaseRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Reorder all Rules for a specific Application owned by your account.
     * Ordering Application Response Rules
     * @param applicationId A unique integer value identifying the application.
     * @param applicationResponsePhaseRuleEngineOrderRequest
     * @param [search] A search term.
     */
    public updateApplicationResponseRulesOrderWithHttpInfo(applicationId: number, applicationResponsePhaseRuleEngineOrderRequest: ApplicationResponsePhaseRuleEngineOrderRequest, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedResponsePhaseRuleList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateApplicationResponseRulesOrderWithHttpInfo(applicationId, applicationResponsePhaseRuleEngineOrderRequest, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Reorder all Rules for a specific Application owned by your account.
     * Ordering Application Response Rules
     * @param applicationId A unique integer value identifying the application.
     * @param applicationResponsePhaseRuleEngineOrderRequest
     * @param [search] A search term.
     */
    public updateApplicationResponseRulesOrder(applicationId: number, applicationResponsePhaseRuleEngineOrderRequest: ApplicationResponsePhaseRuleEngineOrderRequest, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedResponsePhaseRuleList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateApplicationResponseRulesOrder(applicationId, applicationResponsePhaseRuleEngineOrderRequest, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Reorder all Rules for a specific Application owned by your account.
     * Ordering Application Response Rules
     * @param applicationId A unique integer value identifying the application.
     * @param versionId The ULID identifier of the version.
     * @param applicationResponsePhaseRuleEngineOrderRequest
     * @param [search] A search term.
     */
    public updateApplicationResponseRulesOrder2WithHttpInfo(applicationId: number, versionId: string, applicationResponsePhaseRuleEngineOrderRequest: ApplicationResponsePhaseRuleEngineOrderRequest, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedResponsePhaseRuleList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateApplicationResponseRulesOrder2WithHttpInfo(applicationId, versionId, applicationResponsePhaseRuleEngineOrderRequest, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Reorder all Rules for a specific Application owned by your account.
     * Ordering Application Response Rules
     * @param applicationId A unique integer value identifying the application.
     * @param versionId The ULID identifier of the version.
     * @param applicationResponsePhaseRuleEngineOrderRequest
     * @param [search] A search term.
     */
    public updateApplicationResponseRulesOrder2(applicationId: number, versionId: string, applicationResponsePhaseRuleEngineOrderRequest: ApplicationResponsePhaseRuleEngineOrderRequest, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedResponsePhaseRuleList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateApplicationResponseRulesOrder2(applicationId, versionId, applicationResponsePhaseRuleEngineOrderRequest, search, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAuthLoginApi } from './ObservableAPI';

import { AuthLoginApiRequestFactory, AuthLoginApiResponseProcessor} from "../apis/AuthLoginApi";
export class PromiseAuthLoginApi {
    private api: ObservableAuthLoginApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthLoginApiRequestFactory,
        responseProcessor?: AuthLoginApiResponseProcessor
    ) {
        this.api = new ObservableAuthLoginApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint performs user authentication and issues the user\'s JWT tokens. The response depends on whether multi-factor authentication (MFA) is enabled for the user:  - If the user does not have MFA enabled, the API returns a TokenPair object containing the access_token and refresh_token, allowing immediate authentication.  - If the user has MFA enabled, the response returns an MFAToken object. This temporary token must be used in the MFA verification endpoint to complete authentication. After successful verification of the second factor, the TokenPair is issued.
     * User Login – Generate JWT Tokens
     * @param loginRequest
     */
    public authUserLoginWithHttpInfo(loginRequest: LoginRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseLogin>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authUserLoginWithHttpInfo(loginRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint performs user authentication and issues the user\'s JWT tokens. The response depends on whether multi-factor authentication (MFA) is enabled for the user:  - If the user does not have MFA enabled, the API returns a TokenPair object containing the access_token and refresh_token, allowing immediate authentication.  - If the user has MFA enabled, the response returns an MFAToken object. This temporary token must be used in the MFA verification endpoint to complete authentication. After successful verification of the second factor, the TokenPair is issued.
     * User Login – Generate JWT Tokens
     * @param loginRequest
     */
    public authUserLogin(loginRequest: LoginRequest, _options?: PromiseConfigurationOptions): Promise<ResponseLogin> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authUserLogin(loginRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the login type configured for the user. This indicates whether the user authenticates directly via Azion credentials (login) or via a federated Identity Provider (federated) linked to their account. This endpoint allows clients to determine whether to proceed with Azion\'s native login flow or redirect the user to the Identity Provider (IdP) for authentication.
     * Check User Authentication Method
     * @param [email] Email address of the user
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public authUserLoginMethodWithHttpInfo(email?: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserLoginMethodResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authUserLoginMethodWithHttpInfo(email, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the login type configured for the user. This indicates whether the user authenticates directly via Azion credentials (login) or via a federated Identity Provider (federated) linked to their account. This endpoint allows clients to determine whether to proceed with Azion\'s native login flow or redirect the user to the Identity Provider (IdP) for authentication.
     * Check User Authentication Method
     * @param [email] Email address of the user
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public authUserLoginMethod(email?: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<UserLoginMethodResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authUserLoginMethod(email, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves JWT access and refresh tokens, via a POST request with jwt mfa token as auth + code.
     * Retrieve user JWT tokens by MFA auth
     * @param tOTPVerificationRequest
     */
    public totpVerifyWithHttpInfo(tOTPVerificationRequest: TOTPVerificationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TokenPairResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.totpVerifyWithHttpInfo(tOTPVerificationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves JWT access and refresh tokens, via a POST request with jwt mfa token as auth + code.
     * Retrieve user JWT tokens by MFA auth
     * @param tOTPVerificationRequest
     */
    public totpVerify(tOTPVerificationRequest: TOTPVerificationRequest, _options?: PromiseConfigurationOptions): Promise<TokenPairResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.totpVerify(tOTPVerificationRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAuthMFATOTPDeviceApi } from './ObservableAPI';

import { AuthMFATOTPDeviceApiRequestFactory, AuthMFATOTPDeviceApiResponseProcessor} from "../apis/AuthMFATOTPDeviceApi";
export class PromiseAuthMFATOTPDeviceApi {
    private api: ObservableAuthMFATOTPDeviceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthMFATOTPDeviceApiRequestFactory,
        responseProcessor?: AuthMFATOTPDeviceApiResponseProcessor
    ) {
        this.api = new ObservableAuthMFATOTPDeviceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new TOTP device for your account.
     * Create a TOTP device
     * @param [body]
     */
    public createTotpDeviceWithHttpInfo(body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TOTPDeviceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTotpDeviceWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new TOTP device for your account.
     * Create a TOTP device
     * @param [body]
     */
    public createTotpDevice(body?: any, _options?: PromiseConfigurationOptions): Promise<TOTPDeviceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTotpDevice(body, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific TOTP device from your account or descendant account.
     * Delete a TOTP device
     * @param deviceId A unique integer value identifying the TOTP device.
     */
    public deleteTotpDeviceWithHttpInfo(deviceId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTotpDeviceWithHttpInfo(deviceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific TOTP device from your account or descendant account.
     * Delete a TOTP device
     * @param deviceId A unique integer value identifying the TOTP device.
     */
    public deleteTotpDevice(deviceId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTotpDevice(deviceId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all totp devices for user account and descendant accounts.
     * List of TOTP devices
     * @param [confirmed] Filter by confirmed status.
     * @param [email] Filter by user\&#39;s email (case-insensitive, partial match).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [name] Filter by user\&#39;s first name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listTotpDevicesWithHttpInfo(confirmed?: boolean, email?: string, fields?: string, id?: string, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedTOTPDeviceList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTotpDevicesWithHttpInfo(confirmed, email, fields, id, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all totp devices for user account and descendant accounts.
     * List of TOTP devices
     * @param [confirmed] Filter by confirmed status.
     * @param [email] Filter by user\&#39;s email (case-insensitive, partial match).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [name] Filter by user\&#39;s first name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listTotpDevices(confirmed?: boolean, email?: string, fields?: string, id?: string, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedTOTPDeviceList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTotpDevices(confirmed, email, fields, id, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAuthRefreshAccessTokenApi } from './ObservableAPI';

import { AuthRefreshAccessTokenApiRequestFactory, AuthRefreshAccessTokenApiResponseProcessor} from "../apis/AuthRefreshAccessTokenApi";
export class PromiseAuthRefreshAccessTokenApi {
    private api: ObservableAuthRefreshAccessTokenApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthRefreshAccessTokenApiRequestFactory,
        responseProcessor?: AuthRefreshAccessTokenApiResponseProcessor
    ) {
        this.api = new ObservableAuthRefreshAccessTokenApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Refresh JWT access token, via a POST request.
     * Refresh user JWT access token
     * @param [tokenRequest]
     */
    public authUserRefreshTokenWithHttpInfo(tokenRequest?: TokenRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TokenResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authUserRefreshTokenWithHttpInfo(tokenRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Refresh JWT access token, via a POST request.
     * Refresh user JWT access token
     * @param [tokenRequest]
     */
    public authUserRefreshToken(tokenRequest?: TokenRequest, _options?: PromiseConfigurationOptions): Promise<TokenResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authUserRefreshToken(tokenRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAuthRevokeApi } from './ObservableAPI';

import { AuthRevokeApiRequestFactory, AuthRevokeApiResponseProcessor} from "../apis/AuthRevokeApi";
export class PromiseAuthRevokeApi {
    private api: ObservableAuthRevokeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthRevokeApiRequestFactory,
        responseProcessor?: AuthRevokeApiResponseProcessor
    ) {
        this.api = new ObservableAuthRevokeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Revoke refresh token via a POST request.
     * Revoke user JWT refresh token
     * @param [body]
     */
    public authUserRevokeWithHttpInfo(body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<StateExecutedResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authUserRevokeWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }

    /**
     * Revoke refresh token via a POST request.
     * Revoke user JWT refresh token
     * @param [body]
     */
    public authUserRevoke(body?: any, _options?: PromiseConfigurationOptions): Promise<StateExecutedResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authUserRevoke(body, observableOptions);
        return result.toPromise();
    }


}



import { ObservableBillingInvoicesApi } from './ObservableAPI';

import { BillingInvoicesApiRequestFactory, BillingInvoicesApiResponseProcessor} from "../apis/BillingInvoicesApi";
export class PromiseBillingInvoicesApi {
    private api: ObservableBillingInvoicesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BillingInvoicesApiRequestFactory,
        responseProcessor?: BillingInvoicesApiResponseProcessor
    ) {
        this.api = new ObservableBillingInvoicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve invoice data for a specific period.
     * Retrieve details of an invoice
     * @param period Invoice period in MM-YYYY format (e.g., 01-2024 for January 2024)
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveInvoiceWithHttpInfo(period: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveInvoiceWithHttpInfo(period, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve invoice data for a specific period.
     * Retrieve details of an invoice
     * @param period Invoice period in MM-YYYY format (e.g., 01-2024 for January 2024)
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveInvoice(period: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveInvoice(period, fields, observableOptions);
        return result.toPromise();
    }


}



import { ObservableBillingPaymentsApi } from './ObservableAPI';

import { BillingPaymentsApiRequestFactory, BillingPaymentsApiResponseProcessor} from "../apis/BillingPaymentsApi";
export class PromiseBillingPaymentsApi {
    private api: ObservableBillingPaymentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BillingPaymentsApiRequestFactory,
        responseProcessor?: BillingPaymentsApiResponseProcessor
    ) {
        this.api = new ObservableBillingPaymentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add credit into the default credit card in US Dollars.
     * Add credits using the default credit card
     * @param creditRequest
     */
    public addCreditsWithHttpInfo(creditRequest: CreditRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreditResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addCreditsWithHttpInfo(creditRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Add credit into the default credit card in US Dollars.
     * Add credits using the default credit card
     * @param creditRequest
     */
    public addCredits(creditRequest: CreditRequest, _options?: PromiseConfigurationOptions): Promise<CreditResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addCredits(creditRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new credit card for your account.
     * Create a new credit card
     * @param paymentMethodRequest
     */
    public createCreditCardWithHttpInfo(paymentMethodRequest: PaymentMethodRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaymentMethodResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCreditCardWithHttpInfo(paymentMethodRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new credit card for your account.
     * Create a new credit card
     * @param paymentMethodRequest
     */
    public createCreditCard(paymentMethodRequest: PaymentMethodRequest, _options?: PromiseConfigurationOptions): Promise<PaymentMethodResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCreditCard(paymentMethodRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Destruction of a specific credit card in your account.
     * Destroy a credit card
     * @param id
     */
    public destroyCreditCardWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.destroyCreditCardWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Destruction of a specific credit card in your account.
     * Destroy a credit card
     * @param id
     */
    public destroyCreditCard(id: string, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.destroyCreditCard(id, observableOptions);
        return result.toPromise();
    }

    /**
     * List all credit cards owned by your account.
     * List of the credit cards
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listCreditCardsWithHttpInfo(fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedPaymentMethodResponseList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCreditCardsWithHttpInfo(fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all credit cards owned by your account.
     * List of the credit cards
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listCreditCards(fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedPaymentMethodResponseList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCreditCards(fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all details of the payment history.
     * List of the payment history
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listPaymentHistoryWithHttpInfo(fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedPaymentHistoryList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listPaymentHistoryWithHttpInfo(fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all details of the payment history.
     * List of the payment history
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listPaymentHistory(fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedPaymentHistoryList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listPaymentHistory(fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the field \'is_default\' to enable of an existing credit card. Only the field \'is_default\' is editable for an existing card.
     * Partially update a credit card
     * @param id
     * @param [patchedPartialUpdateRequest]
     */
    public partialUpdateCreditCardWithHttpInfo(id: string, patchedPartialUpdateRequest?: PatchedPartialUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaymentMethodResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateCreditCardWithHttpInfo(id, patchedPartialUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the field \'is_default\' to enable of an existing credit card. Only the field \'is_default\' is editable for an existing card.
     * Partially update a credit card
     * @param id
     * @param [patchedPartialUpdateRequest]
     */
    public partialUpdateCreditCard(id: string, patchedPartialUpdateRequest?: PatchedPartialUpdateRequest, _options?: PromiseConfigurationOptions): Promise<PaymentMethodResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateCreditCard(id, patchedPartialUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific credit card in your account.
     * Retrieve details from a credit card
     * @param id
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveCreditCardWithHttpInfo(id: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaymentMethodResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveCreditCardWithHttpInfo(id, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific credit card in your account.
     * Retrieve details from a credit card
     * @param id
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveCreditCard(id: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<PaymentMethodResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveCreditCard(id, fields, observableOptions);
        return result.toPromise();
    }


}



import { ObservableConnectorVersionsApi } from './ObservableAPI';

import { ConnectorVersionsApiRequestFactory, ConnectorVersionsApiResponseProcessor} from "../apis/ConnectorVersionsApi";
export class PromiseConnectorVersionsApi {
    private api: ObservableConnectorVersionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConnectorVersionsApiRequestFactory,
        responseProcessor?: ConnectorVersionsApiResponseProcessor
    ) {
        this.api = new ObservableConnectorVersionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a ready version (soft-delete).
     * Archive a Connector version
     * @param connectorId The ID of the Connector resource.
     * @param versionId The identifier of the version.
     * @param [versionArchiveRequest]
     */
    public archiveConnectorVersionWithHttpInfo(connectorId: number, versionId: string, versionArchiveRequest?: VersionArchiveRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.archiveConnectorVersionWithHttpInfo(connectorId, versionId, versionArchiveRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Archive a ready version (soft-delete).
     * Archive a Connector version
     * @param connectorId The ID of the Connector resource.
     * @param versionId The identifier of the version.
     * @param [versionArchiveRequest]
     */
    public archiveConnectorVersion(connectorId: number, versionId: string, versionArchiveRequest?: VersionArchiveRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.archiveConnectorVersion(connectorId, versionId, versionArchiveRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build a Connector version
     * @param connectorId The ID of the Connector resource.
     * @param versionId The identifier of the version.
     * @param [versionBuildRequest]
     */
    public buildConnectorVersionWithHttpInfo(connectorId: number, versionId: string, versionBuildRequest?: VersionBuildRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.buildConnectorVersionWithHttpInfo(connectorId, versionId, versionBuildRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build a Connector version
     * @param connectorId The ID of the Connector resource.
     * @param versionId The identifier of the version.
     * @param [versionBuildRequest]
     */
    public buildConnectorVersion(connectorId: number, versionId: string, versionBuildRequest?: VersionBuildRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.buildConnectorVersion(connectorId, versionId, versionBuildRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel a Connector version build
     * @param connectorId The ID of the Connector resource.
     * @param versionId The identifier of the version.
     * @param [versionCancelRequest]
     */
    public cancelConnectorVersionBuildWithHttpInfo(connectorId: number, versionId: string, versionCancelRequest?: VersionCancelRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cancelConnectorVersionBuildWithHttpInfo(connectorId, versionId, versionCancelRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel a Connector version build
     * @param connectorId The ID of the Connector resource.
     * @param versionId The identifier of the version.
     * @param [versionCancelRequest]
     */
    public cancelConnectorVersionBuild(connectorId: number, versionId: string, versionCancelRequest?: VersionCancelRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cancelConnectorVersionBuild(connectorId, versionId, versionCancelRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new version by cloning an existing one.
     * Create a new Connector version
     * @param connectorId The ID of the Connector resource.
     * @param [versionCreateRequest]
     */
    public createConnectorVersionWithHttpInfo(connectorId: number, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createConnectorVersionWithHttpInfo(connectorId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new version by cloning an existing one.
     * Create a new Connector version
     * @param connectorId The ID of the Connector resource.
     * @param [versionCreateRequest]
     */
    public createConnectorVersion(connectorId: number, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createConnectorVersion(connectorId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific version of a Connector.
     * Delete a Connector version
     * @param connectorId The ID of the Connector resource.
     * @param versionId The identifier of the version.
     */
    public deleteConnectorVersionWithHttpInfo(connectorId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteConnectorVersionWithHttpInfo(connectorId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific version of a Connector.
     * Delete a Connector version
     * @param connectorId The ID of the Connector resource.
     * @param versionId The identifier of the version.
     */
    public deleteConnectorVersion(connectorId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteConnectorVersion(connectorId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all versions of a specific Connector.
     * List Connector versions
     * @param connectorId The ID of the Connector resource.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public listConnectorVersionsWithHttpInfo(connectorId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listConnectorVersionsWithHttpInfo(connectorId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * List all versions of a specific Connector.
     * List Connector versions
     * @param connectorId The ID of the Connector resource.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public listConnectorVersions(connectorId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listConnectorVersions(connectorId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially update a draft version of a Connector.
     * Partially update a Connector version
     * @param connectorId The ID of the Connector resource.
     * @param versionId The identifier of the version.
     * @param [patchedVersionCreateRequest]
     */
    public partialUpdateConnectorVersionWithHttpInfo(connectorId: number, versionId: string, patchedVersionCreateRequest?: PatchedVersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateConnectorVersionWithHttpInfo(connectorId, versionId, patchedVersionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially update a draft version of a Connector.
     * Partially update a Connector version
     * @param connectorId The ID of the Connector resource.
     * @param versionId The identifier of the version.
     * @param [patchedVersionCreateRequest]
     */
    public partialUpdateConnectorVersion(connectorId: number, versionId: string, patchedVersionCreateRequest?: PatchedVersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateConnectorVersion(connectorId, versionId, patchedVersionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific version of a Connector.
     * Retrieve a Connector version
     * @param connectorId The ID of the Connector resource.
     * @param versionId The identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveConnectorVersionWithHttpInfo(connectorId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveConnectorVersionWithHttpInfo(connectorId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific version of a Connector.
     * Retrieve a Connector version
     * @param connectorId The ID of the Connector resource.
     * @param versionId The identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveConnectorVersion(connectorId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveConnectorVersion(connectorId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a draft version of a Connector.
     * Update a Connector version
     * @param connectorId The ID of the Connector resource.
     * @param versionId The identifier of the version.
     * @param [versionCreateRequest]
     */
    public updateConnectorVersionWithHttpInfo(connectorId: number, versionId: string, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateConnectorVersionWithHttpInfo(connectorId, versionId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a draft version of a Connector.
     * Update a Connector version
     * @param connectorId The ID of the Connector resource.
     * @param versionId The identifier of the version.
     * @param [versionCreateRequest]
     */
    public updateConnectorVersion(connectorId: number, versionId: string, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateConnectorVersion(connectorId, versionId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableConnectorsApi } from './ObservableAPI';

import { ConnectorsApiRequestFactory, ConnectorsApiResponseProcessor} from "../apis/ConnectorsApi";
export class PromiseConnectorsApi {
    private api: ObservableConnectorsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConnectorsApiRequestFactory,
        responseProcessor?: ConnectorsApiResponseProcessor
    ) {
        this.api = new ObservableConnectorsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Connector in your account.
     * Create a Connector
     * @param [connectorRequest]
     */
    public createConnectorWithHttpInfo(connectorRequest?: ConnectorRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ConnectorResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createConnectorWithHttpInfo(connectorRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Connector in your account.
     * Create a Connector
     * @param [connectorRequest]
     */
    public createConnector(connectorRequest?: ConnectorRequest, _options?: PromiseConfigurationOptions): Promise<ConnectorResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createConnector(connectorRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Connector in your account.
     * Delete a Connector
     * @param connectorId A unique integer value identifying the connector.
     */
    public deleteConnectorWithHttpInfo(connectorId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteConnectorWithHttpInfo(connectorId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Connector in your account.
     * Delete a Connector
     * @param connectorId A unique integer value identifying the connector.
     */
    public deleteConnector(connectorId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteConnector(connectorId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Connectors owned by your account.
     * List Connectors
     * @param [active] Filter by active status.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     * @param [typeIn] Filter by type (accepts comma-separated values).
     */
    public listConnectorsWithHttpInfo(active?: boolean, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, typeIn?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedConnectorList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listConnectorsWithHttpInfo(active, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, search, typeIn, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Connectors owned by your account.
     * List Connectors
     * @param [active] Filter by active status.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     * @param [typeIn] Filter by type (accepts comma-separated values).
     */
    public listConnectors(active?: boolean, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, typeIn?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedConnectorList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listConnectors(active, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, search, typeIn, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Connector without affecting other fields.
     * Partially update a Connector
     * @param connectorId A unique integer value identifying the connector.
     * @param [patchedConnectorRequest]
     */
    public partialUpdateConnectorWithHttpInfo(connectorId: number, patchedConnectorRequest?: PatchedConnectorRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ConnectorResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateConnectorWithHttpInfo(connectorId, patchedConnectorRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Connector without affecting other fields.
     * Partially update a Connector
     * @param connectorId A unique integer value identifying the connector.
     * @param [patchedConnectorRequest]
     */
    public partialUpdateConnector(connectorId: number, patchedConnectorRequest?: PatchedConnectorRequest, _options?: PromiseConfigurationOptions): Promise<ConnectorResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateConnector(connectorId, patchedConnectorRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Connector in your account.
     * Retrieve details of a Connector
     * @param connectorId A unique integer value identifying the connector.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveConnectorWithHttpInfo(connectorId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ConnectorResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveConnectorWithHttpInfo(connectorId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Connector in your account.
     * Retrieve details of a Connector
     * @param connectorId A unique integer value identifying the connector.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveConnector(connectorId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<ConnectorResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveConnector(connectorId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Connector. This replaces the entire Connector with the new data provided.
     * Update a Connector
     * @param connectorId A unique integer value identifying the connector.
     * @param [connectorRequest]
     */
    public updateConnectorWithHttpInfo(connectorId: number, connectorRequest?: ConnectorRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ConnectorResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateConnectorWithHttpInfo(connectorId, connectorRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Connector. This replaces the entire Connector with the new data provided.
     * Update a Connector
     * @param connectorId A unique integer value identifying the connector.
     * @param [connectorRequest]
     */
    public updateConnector(connectorId: number, connectorRequest?: ConnectorRequest, _options?: PromiseConfigurationOptions): Promise<ConnectorResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateConnector(connectorId, connectorRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableCustomPageVersionsApi } from './ObservableAPI';

import { CustomPageVersionsApiRequestFactory, CustomPageVersionsApiResponseProcessor} from "../apis/CustomPageVersionsApi";
export class PromiseCustomPageVersionsApi {
    private api: ObservableCustomPageVersionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomPageVersionsApiRequestFactory,
        responseProcessor?: CustomPageVersionsApiResponseProcessor
    ) {
        this.api = new ObservableCustomPageVersionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a ready version.
     * Archive a Custom Page version
     * @param customPageId The ID of the Custom Page resource.
     * @param versionId The identifier of the version.
     * @param [versionArchiveRequest]
     */
    public archiveCustomPageVersionWithHttpInfo(customPageId: number, versionId: string, versionArchiveRequest?: VersionArchiveRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.archiveCustomPageVersionWithHttpInfo(customPageId, versionId, versionArchiveRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Archive a ready version.
     * Archive a Custom Page version
     * @param customPageId The ID of the Custom Page resource.
     * @param versionId The identifier of the version.
     * @param [versionArchiveRequest]
     */
    public archiveCustomPageVersion(customPageId: number, versionId: string, versionArchiveRequest?: VersionArchiveRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.archiveCustomPageVersion(customPageId, versionId, versionArchiveRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build a Custom Page version
     * @param customPageId The ID of the Custom Page resource.
     * @param versionId The identifier of the version.
     * @param [versionBuildRequest]
     */
    public buildCustomPageVersionWithHttpInfo(customPageId: number, versionId: string, versionBuildRequest?: VersionBuildRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.buildCustomPageVersionWithHttpInfo(customPageId, versionId, versionBuildRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build a Custom Page version
     * @param customPageId The ID of the Custom Page resource.
     * @param versionId The identifier of the version.
     * @param [versionBuildRequest]
     */
    public buildCustomPageVersion(customPageId: number, versionId: string, versionBuildRequest?: VersionBuildRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.buildCustomPageVersion(customPageId, versionId, versionBuildRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel a Custom Page version build
     * @param customPageId The ID of the Custom Page resource.
     * @param versionId The identifier of the version.
     * @param [versionCancelRequest]
     */
    public cancelCustomPageVersionBuildWithHttpInfo(customPageId: number, versionId: string, versionCancelRequest?: VersionCancelRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cancelCustomPageVersionBuildWithHttpInfo(customPageId, versionId, versionCancelRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel a Custom Page version build
     * @param customPageId The ID of the Custom Page resource.
     * @param versionId The identifier of the version.
     * @param [versionCancelRequest]
     */
    public cancelCustomPageVersionBuild(customPageId: number, versionId: string, versionCancelRequest?: VersionCancelRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cancelCustomPageVersionBuild(customPageId, versionId, versionCancelRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new version by cloning.
     * Create a new Custom Page version
     * @param customPageId The ID of the Custom Page resource.
     * @param [versionCreateRequest]
     */
    public createCustomPageVersionWithHttpInfo(customPageId: number, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCustomPageVersionWithHttpInfo(customPageId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new version by cloning.
     * Create a new Custom Page version
     * @param customPageId The ID of the Custom Page resource.
     * @param [versionCreateRequest]
     */
    public createCustomPageVersion(customPageId: number, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCustomPageVersion(customPageId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific version.
     * Delete a Custom Page version
     * @param customPageId The ID of the Custom Page resource.
     * @param versionId The identifier of the version.
     */
    public deleteCustomPageVersionWithHttpInfo(customPageId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCustomPageVersionWithHttpInfo(customPageId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific version.
     * Delete a Custom Page version
     * @param customPageId The ID of the Custom Page resource.
     * @param versionId The identifier of the version.
     */
    public deleteCustomPageVersion(customPageId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCustomPageVersion(customPageId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all versions of a specific Custom Page.
     * List Custom Page versions
     * @param customPageId The ID of the Custom Page resource.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public listCustomPageVersionsWithHttpInfo(customPageId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCustomPageVersionsWithHttpInfo(customPageId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * List all versions of a specific Custom Page.
     * List Custom Page versions
     * @param customPageId The ID of the Custom Page resource.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public listCustomPageVersions(customPageId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCustomPageVersions(customPageId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially update a draft version.
     * Partially update a Custom Page version
     * @param customPageId The ID of the Custom Page resource.
     * @param versionId The identifier of the version.
     * @param [patchedVersionCreateRequest]
     */
    public partialUpdateCustomPageVersionWithHttpInfo(customPageId: number, versionId: string, patchedVersionCreateRequest?: PatchedVersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateCustomPageVersionWithHttpInfo(customPageId, versionId, patchedVersionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially update a draft version.
     * Partially update a Custom Page version
     * @param customPageId The ID of the Custom Page resource.
     * @param versionId The identifier of the version.
     * @param [patchedVersionCreateRequest]
     */
    public partialUpdateCustomPageVersion(customPageId: number, versionId: string, patchedVersionCreateRequest?: PatchedVersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateCustomPageVersion(customPageId, versionId, patchedVersionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific version.
     * Retrieve a Custom Page version
     * @param customPageId The ID of the Custom Page resource.
     * @param versionId The identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveCustomPageVersionWithHttpInfo(customPageId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveCustomPageVersionWithHttpInfo(customPageId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific version.
     * Retrieve a Custom Page version
     * @param customPageId The ID of the Custom Page resource.
     * @param versionId The identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveCustomPageVersion(customPageId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveCustomPageVersion(customPageId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a draft version.
     * Update a Custom Page version
     * @param customPageId The ID of the Custom Page resource.
     * @param versionId The identifier of the version.
     * @param [versionCreateRequest]
     */
    public updateCustomPageVersionWithHttpInfo(customPageId: number, versionId: string, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCustomPageVersionWithHttpInfo(customPageId, versionId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a draft version.
     * Update a Custom Page version
     * @param customPageId The ID of the Custom Page resource.
     * @param versionId The identifier of the version.
     * @param [versionCreateRequest]
     */
    public updateCustomPageVersion(customPageId: number, versionId: string, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCustomPageVersion(customPageId, versionId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableCustomPagesApi } from './ObservableAPI';

import { CustomPagesApiRequestFactory, CustomPagesApiResponseProcessor} from "../apis/CustomPagesApi";
export class PromiseCustomPagesApi {
    private api: ObservableCustomPagesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomPagesApiRequestFactory,
        responseProcessor?: CustomPagesApiResponseProcessor
    ) {
        this.api = new ObservableCustomPagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Custom Page in your account.
     * Create a Custom Page
     * @param customPageRequest
     */
    public createCustomPageWithHttpInfo(customPageRequest: CustomPageRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomPageResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCustomPageWithHttpInfo(customPageRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Custom Page in your account.
     * Create a Custom Page
     * @param customPageRequest
     */
    public createCustomPage(customPageRequest: CustomPageRequest, _options?: PromiseConfigurationOptions): Promise<CustomPageResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCustomPage(customPageRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Custom Page in your account.
     * Delete a Custom Page
     * @param customPageId A unique integer value identifying the custom page.
     */
    public deleteCustomPageWithHttpInfo(customPageId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCustomPageWithHttpInfo(customPageId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Custom Page in your account.
     * Delete a Custom Page
     * @param customPageId A unique integer value identifying the custom page.
     */
    public deleteCustomPage(customPageId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCustomPage(customPageId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Custom Pages owned by your account.
     * List Custom Pages
     * @param [active] Filter by active status.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listCustomPagesWithHttpInfo(active?: boolean, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedCustomPageList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCustomPagesWithHttpInfo(active, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Custom Pages owned by your account.
     * List Custom Pages
     * @param [active] Filter by active status.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listCustomPages(active?: boolean, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedCustomPageList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCustomPages(active, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Custom Page without affecting other fields.
     * Partially update a Custom Page
     * @param customPageId A unique integer value identifying the custom page.
     * @param [patchedCustomPageRequest]
     */
    public partialUpdateCustomPageWithHttpInfo(customPageId: number, patchedCustomPageRequest?: PatchedCustomPageRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomPageResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateCustomPageWithHttpInfo(customPageId, patchedCustomPageRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Custom Page without affecting other fields.
     * Partially update a Custom Page
     * @param customPageId A unique integer value identifying the custom page.
     * @param [patchedCustomPageRequest]
     */
    public partialUpdateCustomPage(customPageId: number, patchedCustomPageRequest?: PatchedCustomPageRequest, _options?: PromiseConfigurationOptions): Promise<CustomPageResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateCustomPage(customPageId, patchedCustomPageRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Custom Page in your account.
     * Retrieve details of a Custom Page
     * @param customPageId A unique integer value identifying the custom page.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveCustomPageWithHttpInfo(customPageId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomPageResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveCustomPageWithHttpInfo(customPageId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Custom Page in your account.
     * Retrieve details of a Custom Page
     * @param customPageId A unique integer value identifying the custom page.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveCustomPage(customPageId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<CustomPageResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveCustomPage(customPageId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Custom Page. This replaces the entire Custom Page with the new data provided.
     * Update a Custom Page
     * @param customPageId A unique integer value identifying the custom page.
     * @param customPageRequest
     */
    public updateCustomPageWithHttpInfo(customPageId: number, customPageRequest: CustomPageRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomPageResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCustomPageWithHttpInfo(customPageId, customPageRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Custom Page. This replaces the entire Custom Page with the new data provided.
     * Update a Custom Page
     * @param customPageId A unique integer value identifying the custom page.
     * @param customPageRequest
     */
    public updateCustomPage(customPageId: number, customPageRequest: CustomPageRequest, _options?: PromiseConfigurationOptions): Promise<CustomPageResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCustomPage(customPageId, customPageRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDNSDNSSECApi } from './ObservableAPI';

import { DNSDNSSECApiRequestFactory, DNSDNSSECApiResponseProcessor} from "../apis/DNSDNSSECApi";
export class PromiseDNSDNSSECApi {
    private api: ObservableDNSDNSSECApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DNSDNSSECApiRequestFactory,
        responseProcessor?: DNSDNSSECApiResponseProcessor
    ) {
        this.api = new ObservableDNSDNSSECApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Update one or more fields of an existing DNSSEC without affecting other fields.
     * Partially update a DNSSEC
     * @param zoneId A unique integer value identifying the DNS Zone.
     * @param [patchedDNSSECRequest]
     */
    public partialUpdateDnssecWithHttpInfo(zoneId: number, patchedDNSSECRequest?: PatchedDNSSECRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DNSSECResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateDnssecWithHttpInfo(zoneId, patchedDNSSECRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing DNSSEC without affecting other fields.
     * Partially update a DNSSEC
     * @param zoneId A unique integer value identifying the DNS Zone.
     * @param [patchedDNSSECRequest]
     */
    public partialUpdateDnssec(zoneId: number, patchedDNSSECRequest?: PatchedDNSSECRequest, _options?: PromiseConfigurationOptions): Promise<DNSSECResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateDnssec(zoneId, patchedDNSSECRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific DNSSEC from a DNS Zone in your account.
     * Retrieve details of a DNSSEC
     * @param zoneId A unique integer value identifying the DNS Zone.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveDnssecWithHttpInfo(zoneId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DNSSECResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveDnssecWithHttpInfo(zoneId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific DNSSEC from a DNS Zone in your account.
     * Retrieve details of a DNSSEC
     * @param zoneId A unique integer value identifying the DNS Zone.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveDnssec(zoneId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<DNSSECResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveDnssec(zoneId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing a DNSSEC. This replaces the entire DNSSEC with the new data provided.
     * Update a DNSSEC
     * @param zoneId A unique integer value identifying the DNS Zone.
     * @param dNSSECRequest
     */
    public updateDnssecWithHttpInfo(zoneId: number, dNSSECRequest: DNSSECRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DNSSECResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDnssecWithHttpInfo(zoneId, dNSSECRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing a DNSSEC. This replaces the entire DNSSEC with the new data provided.
     * Update a DNSSEC
     * @param zoneId A unique integer value identifying the DNS Zone.
     * @param dNSSECRequest
     */
    public updateDnssec(zoneId: number, dNSSECRequest: DNSSECRequest, _options?: PromiseConfigurationOptions): Promise<DNSSECResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDnssec(zoneId, dNSSECRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDNSRecordsApi } from './ObservableAPI';

import { DNSRecordsApiRequestFactory, DNSRecordsApiResponseProcessor} from "../apis/DNSRecordsApi";
export class PromiseDNSRecordsApi {
    private api: ObservableDNSRecordsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DNSRecordsApiRequestFactory,
        responseProcessor?: DNSRecordsApiResponseProcessor
    ) {
        this.api = new ObservableDNSRecordsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new DNS Record in a DNS Zone for your account.
     * Create a DNS Record
     * @param zoneId A unique integer value identifying the DNS Zone.
     * @param recordRequest
     */
    public createDnsRecordWithHttpInfo(zoneId: number, recordRequest: RecordRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RecordResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDnsRecordWithHttpInfo(zoneId, recordRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new DNS Record in a DNS Zone for your account.
     * Create a DNS Record
     * @param zoneId A unique integer value identifying the DNS Zone.
     * @param recordRequest
     */
    public createDnsRecord(zoneId: number, recordRequest: RecordRequest, _options?: PromiseConfigurationOptions): Promise<RecordResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDnsRecord(zoneId, recordRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific DNS Record from a DNS Zone in your account.
     * Delete a DNS Record
     * @param recordId A unique integer value identifying the DNS Record.
     * @param zoneId A unique integer value identifying the DNS Zone.
     */
    public deleteDnsRecordWithHttpInfo(recordId: number, zoneId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDnsRecordWithHttpInfo(recordId, zoneId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific DNS Record from a DNS Zone in your account.
     * Delete a DNS Record
     * @param recordId A unique integer value identifying the DNS Record.
     * @param zoneId A unique integer value identifying the DNS Zone.
     */
    public deleteDnsRecord(recordId: number, zoneId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDnsRecord(recordId, zoneId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all DNS Records from a DNS Zone owned by your account.
     * List DNS Records
     * @param zoneId A unique integer value identifying the DNS Zone.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listDnsRecordsWithHttpInfo(zoneId: number, fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedRecordList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDnsRecordsWithHttpInfo(zoneId, fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all DNS Records from a DNS Zone owned by your account.
     * List DNS Records
     * @param zoneId A unique integer value identifying the DNS Zone.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listDnsRecords(zoneId: number, fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedRecordList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDnsRecords(zoneId, fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing DNS Record without affecting other fields.
     * Partially update a DNS Record
     * @param recordId A unique integer value identifying the DNS Record.
     * @param zoneId A unique integer value identifying the DNS Zone.
     * @param [patchedRecordRequest]
     */
    public partialUpdateDnsRecordWithHttpInfo(recordId: number, zoneId: number, patchedRecordRequest?: PatchedRecordRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RecordResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateDnsRecordWithHttpInfo(recordId, zoneId, patchedRecordRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing DNS Record without affecting other fields.
     * Partially update a DNS Record
     * @param recordId A unique integer value identifying the DNS Record.
     * @param zoneId A unique integer value identifying the DNS Zone.
     * @param [patchedRecordRequest]
     */
    public partialUpdateDnsRecord(recordId: number, zoneId: number, patchedRecordRequest?: PatchedRecordRequest, _options?: PromiseConfigurationOptions): Promise<RecordResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateDnsRecord(recordId, zoneId, patchedRecordRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific DNS Record from a DNS Zone in your account.
     * Retrieve details of a DNS Record
     * @param recordId A unique integer value identifying the DNS Record.
     * @param zoneId A unique integer value identifying the DNS Zone.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveDnsRecordWithHttpInfo(recordId: number, zoneId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RecordResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveDnsRecordWithHttpInfo(recordId, zoneId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific DNS Record from a DNS Zone in your account.
     * Retrieve details of a DNS Record
     * @param recordId A unique integer value identifying the DNS Record.
     * @param zoneId A unique integer value identifying the DNS Zone.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveDnsRecord(recordId: number, zoneId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<RecordResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveDnsRecord(recordId, zoneId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing a DNS Record. This replaces the entire DNS Record with the new data provided.
     * Update a DNS Record
     * @param recordId A unique integer value identifying the DNS Record.
     * @param zoneId A unique integer value identifying the DNS Zone.
     * @param recordRequest
     */
    public updateDnsRecordWithHttpInfo(recordId: number, zoneId: number, recordRequest: RecordRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RecordResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDnsRecordWithHttpInfo(recordId, zoneId, recordRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing a DNS Record. This replaces the entire DNS Record with the new data provided.
     * Update a DNS Record
     * @param recordId A unique integer value identifying the DNS Record.
     * @param zoneId A unique integer value identifying the DNS Zone.
     * @param recordRequest
     */
    public updateDnsRecord(recordId: number, zoneId: number, recordRequest: RecordRequest, _options?: PromiseConfigurationOptions): Promise<RecordResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDnsRecord(recordId, zoneId, recordRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDNSZonesApi } from './ObservableAPI';

import { DNSZonesApiRequestFactory, DNSZonesApiResponseProcessor} from "../apis/DNSZonesApi";
export class PromiseDNSZonesApi {
    private api: ObservableDNSZonesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DNSZonesApiRequestFactory,
        responseProcessor?: DNSZonesApiResponseProcessor
    ) {
        this.api = new ObservableDNSZonesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new DNS Zone for your account.
     * Create a DNS Zone
     * @param zoneRequest
     */
    public createDnsZoneWithHttpInfo(zoneRequest: ZoneRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ZoneResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDnsZoneWithHttpInfo(zoneRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new DNS Zone for your account.
     * Create a DNS Zone
     * @param zoneRequest
     */
    public createDnsZone(zoneRequest: ZoneRequest, _options?: PromiseConfigurationOptions): Promise<ZoneResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDnsZone(zoneRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific DNS Zone in your account.
     * Delete a DNS Zone
     * @param zoneId A unique integer value identifying the DNS Zone.
     */
    public deleteDnsZoneWithHttpInfo(zoneId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDnsZoneWithHttpInfo(zoneId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific DNS Zone in your account.
     * Delete a DNS Zone
     * @param zoneId A unique integer value identifying the DNS Zone.
     */
    public deleteDnsZone(zoneId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDnsZone(zoneId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all DNS Zones owned by your account.
     * List DNS Zones
     * @param [active] Filter by active status.
     * @param [domain] Filter by domain (exact match).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [name] Filter by name (exact match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listDnsZonesWithHttpInfo(active?: boolean, domain?: string, fields?: string, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedZoneList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDnsZonesWithHttpInfo(active, domain, fields, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all DNS Zones owned by your account.
     * List DNS Zones
     * @param [active] Filter by active status.
     * @param [domain] Filter by domain (exact match).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [name] Filter by name (exact match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listDnsZones(active?: boolean, domain?: string, fields?: string, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedZoneList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDnsZones(active, domain, fields, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing DNS Zone without affecting other fields.
     * Partially update a DNS Zone
     * @param zoneId A unique integer value identifying the DNS Zone.
     * @param [patchedUpdateZoneRequest]
     */
    public partialUpdateDnsZoneWithHttpInfo(zoneId: number, patchedUpdateZoneRequest?: PatchedUpdateZoneRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ZoneResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateDnsZoneWithHttpInfo(zoneId, patchedUpdateZoneRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing DNS Zone without affecting other fields.
     * Partially update a DNS Zone
     * @param zoneId A unique integer value identifying the DNS Zone.
     * @param [patchedUpdateZoneRequest]
     */
    public partialUpdateDnsZone(zoneId: number, patchedUpdateZoneRequest?: PatchedUpdateZoneRequest, _options?: PromiseConfigurationOptions): Promise<ZoneResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateDnsZone(zoneId, patchedUpdateZoneRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific DNS Zone in your account.
     * Retrieve details of a DNS Zone
     * @param zoneId A unique integer value identifying the DNS Zone.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveDnsZoneWithHttpInfo(zoneId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ZoneResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveDnsZoneWithHttpInfo(zoneId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific DNS Zone in your account.
     * Retrieve details of a DNS Zone
     * @param zoneId A unique integer value identifying the DNS Zone.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveDnsZone(zoneId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<ZoneResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveDnsZone(zoneId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing a DNS Zone. This replaces the entire DNS Zone with the new data provided.
     * Update a DNS Zone
     * @param zoneId A unique integer value identifying the DNS Zone.
     * @param updateZoneRequest
     */
    public updateDnsZoneWithHttpInfo(zoneId: number, updateZoneRequest: UpdateZoneRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ZoneResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDnsZoneWithHttpInfo(zoneId, updateZoneRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing a DNS Zone. This replaces the entire DNS Zone with the new data provided.
     * Update a DNS Zone
     * @param zoneId A unique integer value identifying the DNS Zone.
     * @param updateZoneRequest
     */
    public updateDnsZone(zoneId: number, updateZoneRequest: UpdateZoneRequest, _options?: PromiseConfigurationOptions): Promise<ZoneResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDnsZone(zoneId, updateZoneRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDataStreamDataSourcesApi } from './ObservableAPI';

import { DataStreamDataSourcesApiRequestFactory, DataStreamDataSourcesApiResponseProcessor} from "../apis/DataStreamDataSourcesApi";
export class PromiseDataStreamDataSourcesApi {
    private api: ObservableDataStreamDataSourcesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DataStreamDataSourcesApiRequestFactory,
        responseProcessor?: DataStreamDataSourcesApiResponseProcessor
    ) {
        this.api = new ObservableDataStreamDataSourcesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all Data Sources.
     * List of Data Sources
     * @param [active] Filter by active status.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     * @param [slug] Filter by slug (case-insensitive, exact match).
     */
    public listDataSourcesWithHttpInfo(active?: boolean, fields?: string, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, slug?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedDataSourceList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDataSourcesWithHttpInfo(active, fields, name, ordering, page, pageSize, search, slug, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Data Sources.
     * List of Data Sources
     * @param [active] Filter by active status.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     * @param [slug] Filter by slug (case-insensitive, exact match).
     */
    public listDataSources(active?: boolean, fields?: string, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, slug?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedDataSourceList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDataSources(active, fields, name, ordering, page, pageSize, search, slug, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDataStreamStreamsApi } from './ObservableAPI';

import { DataStreamStreamsApiRequestFactory, DataStreamStreamsApiResponseProcessor} from "../apis/DataStreamStreamsApi";
export class PromiseDataStreamStreamsApi {
    private api: ObservableDataStreamStreamsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DataStreamStreamsApiRequestFactory,
        responseProcessor?: DataStreamStreamsApiResponseProcessor
    ) {
        this.api = new ObservableDataStreamStreamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Data Stream in your account.
     * Create a Data Stream
     * @param dataStreamRequest
     */
    public createDataStreamWithHttpInfo(dataStreamRequest: DataStreamRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DataStreamResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDataStreamWithHttpInfo(dataStreamRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Data Stream in your account.
     * Create a Data Stream
     * @param dataStreamRequest
     */
    public createDataStream(dataStreamRequest: DataStreamRequest, _options?: PromiseConfigurationOptions): Promise<DataStreamResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDataStream(dataStreamRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Data Stream in your account.
     * Delete a Data Stream
     * @param streamId A unique integer value identifying the data stream.
     */
    public deleteDataStreamWithHttpInfo(streamId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDataStreamWithHttpInfo(streamId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Data Stream in your account.
     * Delete a Data Stream
     * @param streamId A unique integer value identifying the data stream.
     */
    public deleteDataStream(streamId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDataStream(streamId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Data Streams owned by your account.
     * List Data Streams
     * @param [active] Filter by active status.
     * @param [createdGte] Filter by created date (greater than or equal).
     * @param [createdLte] Filter by created date (less than or equal).
     * @param [dataSetId] Filter by data set id (accepts comma-separated values).
     * @param [dataSource] Filter by data source (accepts comma-separated values).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listDataStreamsWithHttpInfo(active?: boolean, createdGte?: Date, createdLte?: Date, dataSetId?: number, dataSource?: string, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedDataStreamList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDataStreamsWithHttpInfo(active, createdGte, createdLte, dataSetId, dataSource, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Data Streams owned by your account.
     * List Data Streams
     * @param [active] Filter by active status.
     * @param [createdGte] Filter by created date (greater than or equal).
     * @param [createdLte] Filter by created date (less than or equal).
     * @param [dataSetId] Filter by data set id (accepts comma-separated values).
     * @param [dataSource] Filter by data source (accepts comma-separated values).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listDataStreams(active?: boolean, createdGte?: Date, createdLte?: Date, dataSetId?: number, dataSource?: string, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedDataStreamList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDataStreams(active, createdGte, createdLte, dataSetId, dataSource, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Data Stream.
     * Partially update a Data Stream
     * @param streamId A unique integer value identifying the data stream.
     * @param [patchedDataStreamRequest]
     */
    public partialUpdateDataStreamWithHttpInfo(streamId: number, patchedDataStreamRequest?: PatchedDataStreamRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DataStreamResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateDataStreamWithHttpInfo(streamId, patchedDataStreamRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Data Stream.
     * Partially update a Data Stream
     * @param streamId A unique integer value identifying the data stream.
     * @param [patchedDataStreamRequest]
     */
    public partialUpdateDataStream(streamId: number, patchedDataStreamRequest?: PatchedDataStreamRequest, _options?: PromiseConfigurationOptions): Promise<DataStreamResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateDataStream(streamId, patchedDataStreamRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific Data Stream in your account.
     * Retrieve details of a Data Stream
     * @param streamId A unique integer value identifying the data stream.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveDataStreamWithHttpInfo(streamId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DataStreamResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveDataStreamWithHttpInfo(streamId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific Data Stream in your account.
     * Retrieve details of a Data Stream
     * @param streamId A unique integer value identifying the data stream.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveDataStream(streamId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<DataStreamResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveDataStream(streamId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Data Stream.
     * Update a Data Stream
     * @param streamId A unique integer value identifying the data stream.
     * @param dataStreamRequest
     */
    public updateDataStreamWithHttpInfo(streamId: number, dataStreamRequest: DataStreamRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DataStreamResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDataStreamWithHttpInfo(streamId, dataStreamRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Data Stream.
     * Update a Data Stream
     * @param streamId A unique integer value identifying the data stream.
     * @param dataStreamRequest
     */
    public updateDataStream(streamId: number, dataStreamRequest: DataStreamRequest, _options?: PromiseConfigurationOptions): Promise<DataStreamResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDataStream(streamId, dataStreamRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDataStreamTemplatesApi } from './ObservableAPI';

import { DataStreamTemplatesApiRequestFactory, DataStreamTemplatesApiResponseProcessor} from "../apis/DataStreamTemplatesApi";
export class PromiseDataStreamTemplatesApi {
    private api: ObservableDataStreamTemplatesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DataStreamTemplatesApiRequestFactory,
        responseProcessor?: DataStreamTemplatesApiResponseProcessor
    ) {
        this.api = new ObservableDataStreamTemplatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new custom Template in your account.
     * Create a Template
     * @param templateRequest
     */
    public createTemplateWithHttpInfo(templateRequest: TemplateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTemplateWithHttpInfo(templateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new custom Template in your account.
     * Create a Template
     * @param templateRequest
     */
    public createTemplate(templateRequest: TemplateRequest, _options?: PromiseConfigurationOptions): Promise<TemplateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTemplate(templateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific custom Template in your account.
     * Delete a Template
     * @param templateId A unique integer value identifying the template.
     */
    public deleteTemplateWithHttpInfo(templateId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTemplateWithHttpInfo(templateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific custom Template in your account.
     * Delete a Template
     * @param templateId A unique integer value identifying the template.
     */
    public deleteTemplate(templateId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTemplate(templateId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Templates owned by your account.
     * List Templates
     * @param [active] Filter by active status.
     * @param [createdAtGte] Filter by created date (greater than or equal).
     * @param [createdAtLte] Filter by created date (less than or equal).
     * @param [custom] Filter by custom status (true for custom templates, false for default templates).
     * @param [dataSet] Filter by data set (case-insensitive, partial match).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listTemplatesWithHttpInfo(active?: boolean, createdAtGte?: Date, createdAtLte?: Date, custom?: boolean, dataSet?: string, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedTemplateList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTemplatesWithHttpInfo(active, createdAtGte, createdAtLte, custom, dataSet, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Templates owned by your account.
     * List Templates
     * @param [active] Filter by active status.
     * @param [createdAtGte] Filter by created date (greater than or equal).
     * @param [createdAtLte] Filter by created date (less than or equal).
     * @param [custom] Filter by custom status (true for custom templates, false for default templates).
     * @param [dataSet] Filter by data set (case-insensitive, partial match).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listTemplates(active?: boolean, createdAtGte?: Date, createdAtLte?: Date, custom?: boolean, dataSet?: string, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedTemplateList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTemplates(active, createdAtGte, createdAtLte, custom, dataSet, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing custom Template.
     * Partially update a Template
     * @param templateId A unique integer value identifying the template.
     * @param [patchedTemplateRequest]
     */
    public partialUpdateTemplateWithHttpInfo(templateId: number, patchedTemplateRequest?: PatchedTemplateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateTemplateWithHttpInfo(templateId, patchedTemplateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing custom Template.
     * Partially update a Template
     * @param templateId A unique integer value identifying the template.
     * @param [patchedTemplateRequest]
     */
    public partialUpdateTemplate(templateId: number, patchedTemplateRequest?: PatchedTemplateRequest, _options?: PromiseConfigurationOptions): Promise<TemplateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateTemplate(templateId, patchedTemplateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific Template in your account.
     * Retrieve details of a Template
     * @param templateId A unique integer value identifying the template.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveTemplateWithHttpInfo(templateId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveTemplateWithHttpInfo(templateId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific Template in your account.
     * Retrieve details of a Template
     * @param templateId A unique integer value identifying the template.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveTemplate(templateId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<TemplateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveTemplate(templateId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing custom Template.
     * Update a Template
     * @param templateId A unique integer value identifying the template.
     * @param templateRequest
     */
    public updateTemplateWithHttpInfo(templateId: number, templateRequest: TemplateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTemplateWithHttpInfo(templateId, templateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing custom Template.
     * Update a Template
     * @param templateId A unique integer value identifying the template.
     * @param templateRequest
     */
    public updateTemplate(templateId: number, templateRequest: TemplateRequest, _options?: PromiseConfigurationOptions): Promise<TemplateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTemplate(templateId, templateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDigitalCertificatesCertificateRevocationListsApi } from './ObservableAPI';

import { DigitalCertificatesCertificateRevocationListsApiRequestFactory, DigitalCertificatesCertificateRevocationListsApiResponseProcessor} from "../apis/DigitalCertificatesCertificateRevocationListsApi";
export class PromiseDigitalCertificatesCertificateRevocationListsApi {
    private api: ObservableDigitalCertificatesCertificateRevocationListsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DigitalCertificatesCertificateRevocationListsApiRequestFactory,
        responseProcessor?: DigitalCertificatesCertificateRevocationListsApiResponseProcessor
    ) {
        this.api = new ObservableDigitalCertificatesCertificateRevocationListsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new certificate revocation lists (CRL) for your account.
     * Create a certificate revocation lists (CRL)
     * @param certificateRevocationList
     */
    public createCertificateRevocationListWithHttpInfo(certificateRevocationList: CertificateRevocationList, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CertificateRevocationListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCertificateRevocationListWithHttpInfo(certificateRevocationList, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new certificate revocation lists (CRL) for your account.
     * Create a certificate revocation lists (CRL)
     * @param certificateRevocationList
     */
    public createCertificateRevocationList(certificateRevocationList: CertificateRevocationList, _options?: PromiseConfigurationOptions): Promise<CertificateRevocationListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCertificateRevocationList(certificateRevocationList, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific certificate revocation list in your account.
     * Delete a certificate revocation list
     * @param crlId The unique identifier of the certificate revocation list
     */
    public deleteCertificateRevocationListWithHttpInfo(crlId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCertificateRevocationListWithHttpInfo(crlId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific certificate revocation list in your account.
     * Delete a certificate revocation list
     * @param crlId The unique identifier of the certificate revocation list
     */
    public deleteCertificateRevocationList(crlId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCertificateRevocationList(crlId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all certificate revocation lists (CRL) owned by your account.
     * List certificate revocation lists (CRL)
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by CRL ID (accepts comma-separated values).
     * @param [issuer] Filter by issuer (case-insensitive, partial match).
     * @param [lastModified] Filter by exact last modified date and time.
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [lastUpdate] Filter by exact last update date and time.
     * @param [lastUpdateGte] Filter by last update date (greater than or equal).
     * @param [lastUpdateLte] Filter by last update date (less than or equal).
     * @param [name] Filter by CRL name (case-insensitive, partial match).
     * @param [nextUpdate] Filter by exact next update date and time.
     * @param [nextUpdateGte] Filter by next update date (greater than or equal).
     * @param [nextUpdateLte] Filter by next update date (less than or equal).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listCertificateRevocationListsWithHttpInfo(fields?: string, id?: number, issuer?: string, lastModified?: Date, lastModifiedGte?: Date, lastModifiedLte?: Date, lastUpdate?: Date, lastUpdateGte?: Date, lastUpdateLte?: Date, name?: string, nextUpdate?: Date, nextUpdateGte?: Date, nextUpdateLte?: Date, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedCertificateRevocationList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCertificateRevocationListsWithHttpInfo(fields, id, issuer, lastModified, lastModifiedGte, lastModifiedLte, lastUpdate, lastUpdateGte, lastUpdateLte, name, nextUpdate, nextUpdateGte, nextUpdateLte, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all certificate revocation lists (CRL) owned by your account.
     * List certificate revocation lists (CRL)
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by CRL ID (accepts comma-separated values).
     * @param [issuer] Filter by issuer (case-insensitive, partial match).
     * @param [lastModified] Filter by exact last modified date and time.
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [lastUpdate] Filter by exact last update date and time.
     * @param [lastUpdateGte] Filter by last update date (greater than or equal).
     * @param [lastUpdateLte] Filter by last update date (less than or equal).
     * @param [name] Filter by CRL name (case-insensitive, partial match).
     * @param [nextUpdate] Filter by exact next update date and time.
     * @param [nextUpdateGte] Filter by next update date (greater than or equal).
     * @param [nextUpdateLte] Filter by next update date (less than or equal).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listCertificateRevocationLists(fields?: string, id?: number, issuer?: string, lastModified?: Date, lastModifiedGte?: Date, lastModifiedLte?: Date, lastUpdate?: Date, lastUpdateGte?: Date, lastUpdateLte?: Date, name?: string, nextUpdate?: Date, nextUpdateGte?: Date, nextUpdateLte?: Date, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedCertificateRevocationList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCertificateRevocationLists(fields, id, issuer, lastModified, lastModifiedGte, lastModifiedLte, lastUpdate, lastUpdateGte, lastUpdateLte, name, nextUpdate, nextUpdateGte, nextUpdateLte, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing certificate revocation lists (CRL) without affecting other fields.
     * Update a certificate revocation lists (CRL)
     * @param crlId The unique identifier of the certificate revocation list
     * @param [patchedCertificateRevocationList]
     */
    public partialUpdateCertificateRevocationListWithHttpInfo(crlId: number, patchedCertificateRevocationList?: PatchedCertificateRevocationList, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CertificateRevocationListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateCertificateRevocationListWithHttpInfo(crlId, patchedCertificateRevocationList, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing certificate revocation lists (CRL) without affecting other fields.
     * Update a certificate revocation lists (CRL)
     * @param crlId The unique identifier of the certificate revocation list
     * @param [patchedCertificateRevocationList]
     */
    public partialUpdateCertificateRevocationList(crlId: number, patchedCertificateRevocationList?: PatchedCertificateRevocationList, _options?: PromiseConfigurationOptions): Promise<CertificateRevocationListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateCertificateRevocationList(crlId, patchedCertificateRevocationList, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific certificate revocation lists (CRL) in your account.
     * Retrieve details from a certificate revocation lists (CRL)
     * @param crlId The unique identifier of the certificate revocation list
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveCertificateRevocationListWithHttpInfo(crlId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CertificateRevocationListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveCertificateRevocationListWithHttpInfo(crlId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific certificate revocation lists (CRL) in your account.
     * Retrieve details from a certificate revocation lists (CRL)
     * @param crlId The unique identifier of the certificate revocation list
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveCertificateRevocationList(crlId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<CertificateRevocationListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveCertificateRevocationList(crlId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing certificate revocation lists (CRL).  This replaces the entire certificate with the new data provided.
     * Update a certificate revocation lists (CRL)
     * @param crlId The unique identifier of the certificate revocation list
     * @param certificateRevocationList
     */
    public updateCertificateRevocationListWithHttpInfo(crlId: number, certificateRevocationList: CertificateRevocationList, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CertificateRevocationListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCertificateRevocationListWithHttpInfo(crlId, certificateRevocationList, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing certificate revocation lists (CRL).  This replaces the entire certificate with the new data provided.
     * Update a certificate revocation lists (CRL)
     * @param crlId The unique identifier of the certificate revocation list
     * @param certificateRevocationList
     */
    public updateCertificateRevocationList(crlId: number, certificateRevocationList: CertificateRevocationList, _options?: PromiseConfigurationOptions): Promise<CertificateRevocationListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCertificateRevocationList(crlId, certificateRevocationList, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDigitalCertificatesCertificateSigningRequestsApi } from './ObservableAPI';

import { DigitalCertificatesCertificateSigningRequestsApiRequestFactory, DigitalCertificatesCertificateSigningRequestsApiResponseProcessor} from "../apis/DigitalCertificatesCertificateSigningRequestsApi";
export class PromiseDigitalCertificatesCertificateSigningRequestsApi {
    private api: ObservableDigitalCertificatesCertificateSigningRequestsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DigitalCertificatesCertificateSigningRequestsApiRequestFactory,
        responseProcessor?: DigitalCertificatesCertificateSigningRequestsApiResponseProcessor
    ) {
        this.api = new ObservableDigitalCertificatesCertificateSigningRequestsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new certificate signing request (CSR) for your account.
     * Create a certificate signing request (CSR)
     * @param certificateSigningRequest
     */
    public createCertificateSigningRequestWithHttpInfo(certificateSigningRequest: CertificateSigningRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CertificateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCertificateSigningRequestWithHttpInfo(certificateSigningRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new certificate signing request (CSR) for your account.
     * Create a certificate signing request (CSR)
     * @param certificateSigningRequest
     */
    public createCertificateSigningRequest(certificateSigningRequest: CertificateSigningRequest, _options?: PromiseConfigurationOptions): Promise<CertificateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCertificateSigningRequest(certificateSigningRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDigitalCertificatesCertificatesApi } from './ObservableAPI';

import { DigitalCertificatesCertificatesApiRequestFactory, DigitalCertificatesCertificatesApiResponseProcessor} from "../apis/DigitalCertificatesCertificatesApi";
export class PromiseDigitalCertificatesCertificatesApi {
    private api: ObservableDigitalCertificatesCertificatesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DigitalCertificatesCertificatesApiRequestFactory,
        responseProcessor?: DigitalCertificatesCertificatesApiResponseProcessor
    ) {
        this.api = new ObservableDigitalCertificatesCertificatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new certificate for your account.
     * Create a certificate
     * @param certificate
     */
    public createCertificateWithHttpInfo(certificate: Certificate, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CertificateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCertificateWithHttpInfo(certificate, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new certificate for your account.
     * Create a certificate
     * @param certificate
     */
    public createCertificate(certificate: Certificate, _options?: PromiseConfigurationOptions): Promise<CertificateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCertificate(certificate, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific certificate in your account.
     * Delete a certificate
     * @param certificateId The unique identifier of the certificate
     */
    public deleteCertificateWithHttpInfo(certificateId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCertificateWithHttpInfo(certificateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific certificate in your account.
     * Delete a certificate
     * @param certificateId The unique identifier of the certificate
     */
    public deleteCertificate(certificateId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCertificate(certificateId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all certificates owned by your account.
     * List certificates
     * @param [certificateType] Filter by certificate type (accepts comma-separated values).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by certificate ID (accepts comma-separated values).
     * @param [issuer] Filter by issuer (case-insensitive, partial match).
     * @param [lastModified] Filter by exact last modified date and time.
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [managed] Filter by managed status.
     * @param [name] Filter by certificate name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [renewedAt] Filter by exact renewed date and time.
     * @param [renewedAtGte] Filter by renewed date (greater than or equal).
     * @param [renewedAtLte] Filter by renewed date (less than or equal).
     * @param [search] A search term.
     */
    public listCertificatesWithHttpInfo(certificateType?: string, fields?: string, id?: number, issuer?: string, lastModified?: Date, lastModifiedGte?: Date, lastModifiedLte?: Date, managed?: boolean, name?: string, ordering?: string, page?: number, pageSize?: number, renewedAt?: Date, renewedAtGte?: Date, renewedAtLte?: Date, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedCertificateList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCertificatesWithHttpInfo(certificateType, fields, id, issuer, lastModified, lastModifiedGte, lastModifiedLte, managed, name, ordering, page, pageSize, renewedAt, renewedAtGte, renewedAtLte, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all certificates owned by your account.
     * List certificates
     * @param [certificateType] Filter by certificate type (accepts comma-separated values).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by certificate ID (accepts comma-separated values).
     * @param [issuer] Filter by issuer (case-insensitive, partial match).
     * @param [lastModified] Filter by exact last modified date and time.
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [managed] Filter by managed status.
     * @param [name] Filter by certificate name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [renewedAt] Filter by exact renewed date and time.
     * @param [renewedAtGte] Filter by renewed date (greater than or equal).
     * @param [renewedAtLte] Filter by renewed date (less than or equal).
     * @param [search] A search term.
     */
    public listCertificates(certificateType?: string, fields?: string, id?: number, issuer?: string, lastModified?: Date, lastModifiedGte?: Date, lastModifiedLte?: Date, managed?: boolean, name?: string, ordering?: string, page?: number, pageSize?: number, renewedAt?: Date, renewedAtGte?: Date, renewedAtLte?: Date, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedCertificateList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCertificates(certificateType, fields, id, issuer, lastModified, lastModifiedGte, lastModifiedLte, managed, name, ordering, page, pageSize, renewedAt, renewedAtGte, renewedAtLte, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing certificate without affecting other fields.
     * Partially update a certificate
     * @param certificateId The unique identifier of the certificate
     * @param [patchedCertificate]
     */
    public partialUpdateCertificateWithHttpInfo(certificateId: number, patchedCertificate?: PatchedCertificate, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CertificateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateCertificateWithHttpInfo(certificateId, patchedCertificate, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing certificate without affecting other fields.
     * Partially update a certificate
     * @param certificateId The unique identifier of the certificate
     * @param [patchedCertificate]
     */
    public partialUpdateCertificate(certificateId: number, patchedCertificate?: PatchedCertificate, _options?: PromiseConfigurationOptions): Promise<CertificateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateCertificate(certificateId, patchedCertificate, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific certificate in your account.
     * Retrieve details from a certificate
     * @param certificateId The unique identifier of the certificate
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveCertificateWithHttpInfo(certificateId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CertificateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveCertificateWithHttpInfo(certificateId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific certificate in your account.
     * Retrieve details from a certificate
     * @param certificateId The unique identifier of the certificate
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveCertificate(certificateId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<CertificateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveCertificate(certificateId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing certificate. This replaces the entire certificate with the new data provided.
     * Update a certificate
     * @param certificateId The unique identifier of the certificate
     * @param certificate
     */
    public updateCertificateWithHttpInfo(certificateId: number, certificate: Certificate, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CertificateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCertificateWithHttpInfo(certificateId, certificate, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing certificate. This replaces the entire certificate with the new data provided.
     * Update a certificate
     * @param certificateId The unique identifier of the certificate
     * @param certificate
     */
    public updateCertificate(certificateId: number, certificate: Certificate, _options?: PromiseConfigurationOptions): Promise<CertificateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCertificate(certificateId, certificate, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDigitalCertificatesRequestACertificateApi } from './ObservableAPI';

import { DigitalCertificatesRequestACertificateApiRequestFactory, DigitalCertificatesRequestACertificateApiResponseProcessor} from "../apis/DigitalCertificatesRequestACertificateApi";
export class PromiseDigitalCertificatesRequestACertificateApi {
    private api: ObservableDigitalCertificatesRequestACertificateApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DigitalCertificatesRequestACertificateApiRequestFactory,
        responseProcessor?: DigitalCertificatesRequestACertificateApiResponseProcessor
    ) {
        this.api = new ObservableDigitalCertificatesRequestACertificateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Request a new certificate for your account.
     * Request a certificate
     * @param certificateRequest
     */
    public requestCertificateWithHttpInfo(certificateRequest: CertificateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CertificateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.requestCertificateWithHttpInfo(certificateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Request a new certificate for your account.
     * Request a certificate
     * @param certificateRequest
     */
    public requestCertificate(certificateRequest: CertificateRequest, _options?: PromiseConfigurationOptions): Promise<CertificateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.requestCertificate(certificateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFavoritesApi } from './ObservableAPI';

import { FavoritesApiRequestFactory, FavoritesApiResponseProcessor} from "../apis/FavoritesApi";
export class PromiseFavoritesApi {
    private api: ObservableFavoritesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FavoritesApiRequestFactory,
        responseProcessor?: FavoritesApiResponseProcessor
    ) {
        this.api = new ObservableFavoritesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new favorite for your account.
     * Create a new favorite
     * @param favoriteRequest
     */
    public createFavoriteWithHttpInfo(favoriteRequest: FavoriteRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseFavorite>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFavoriteWithHttpInfo(favoriteRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new favorite for your account.
     * Create a new favorite
     * @param favoriteRequest
     */
    public createFavorite(favoriteRequest: FavoriteRequest, _options?: PromiseConfigurationOptions): Promise<ResponseFavorite> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFavorite(favoriteRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific favorite in your account.
     * Delete a favorite
     * @param favoriteId A unique integer value identifying this Favorite.
     */
    public deleteFavoriteWithHttpInfo(favoriteId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseDeleteFavorite>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFavoriteWithHttpInfo(favoriteId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific favorite in your account.
     * Delete a favorite
     * @param favoriteId A unique integer value identifying this Favorite.
     */
    public deleteFavorite(favoriteId: number, _options?: PromiseConfigurationOptions): Promise<ResponseDeleteFavorite> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFavorite(favoriteId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all favorites by your account.
     * List of the favorites
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id]
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     * @param [type]
     * @param [uri]
     */
    public listFavoritesWithHttpInfo(fields?: string, id?: number, ordering?: string, page?: number, pageSize?: number, search?: string, type?: string, uri?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedFavoriteList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFavoritesWithHttpInfo(fields, id, ordering, page, pageSize, search, type, uri, observableOptions);
        return result.toPromise();
    }

    /**
     * List all favorites by your account.
     * List of the favorites
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id]
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     * @param [type]
     * @param [uri]
     */
    public listFavorites(fields?: string, id?: number, ordering?: string, page?: number, pageSize?: number, search?: string, type?: string, uri?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedFavoriteList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFavorites(fields, id, ordering, page, pageSize, search, type, uri, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFirewallVersionsApi } from './ObservableAPI';

import { FirewallVersionsApiRequestFactory, FirewallVersionsApiResponseProcessor} from "../apis/FirewallVersionsApi";
export class PromiseFirewallVersionsApi {
    private api: ObservableFirewallVersionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FirewallVersionsApiRequestFactory,
        responseProcessor?: FirewallVersionsApiResponseProcessor
    ) {
        this.api = new ObservableFirewallVersionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a ready version.
     * Archive a Firewall version
     * @param firewallId The ID of the Firewall resource.
     * @param versionId The identifier of the version.
     * @param [versionArchiveRequest]
     */
    public archiveFirewallVersionWithHttpInfo(firewallId: number, versionId: string, versionArchiveRequest?: VersionArchiveRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.archiveFirewallVersionWithHttpInfo(firewallId, versionId, versionArchiveRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Archive a ready version.
     * Archive a Firewall version
     * @param firewallId The ID of the Firewall resource.
     * @param versionId The identifier of the version.
     * @param [versionArchiveRequest]
     */
    public archiveFirewallVersion(firewallId: number, versionId: string, versionArchiveRequest?: VersionArchiveRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.archiveFirewallVersion(firewallId, versionId, versionArchiveRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build a Firewall version
     * @param firewallId The ID of the Firewall resource.
     * @param versionId The identifier of the version.
     * @param [versionBuildRequest]
     */
    public buildFirewallVersionWithHttpInfo(firewallId: number, versionId: string, versionBuildRequest?: VersionBuildRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.buildFirewallVersionWithHttpInfo(firewallId, versionId, versionBuildRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build a Firewall version
     * @param firewallId The ID of the Firewall resource.
     * @param versionId The identifier of the version.
     * @param [versionBuildRequest]
     */
    public buildFirewallVersion(firewallId: number, versionId: string, versionBuildRequest?: VersionBuildRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.buildFirewallVersion(firewallId, versionId, versionBuildRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel a Firewall version build
     * @param firewallId The ID of the Firewall resource.
     * @param versionId The identifier of the version.
     * @param [versionCancelRequest]
     */
    public cancelFirewallVersionBuildWithHttpInfo(firewallId: number, versionId: string, versionCancelRequest?: VersionCancelRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cancelFirewallVersionBuildWithHttpInfo(firewallId, versionId, versionCancelRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel a Firewall version build
     * @param firewallId The ID of the Firewall resource.
     * @param versionId The identifier of the version.
     * @param [versionCancelRequest]
     */
    public cancelFirewallVersionBuild(firewallId: number, versionId: string, versionCancelRequest?: VersionCancelRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cancelFirewallVersionBuild(firewallId, versionId, versionCancelRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new version by cloning.
     * Create a new Firewall version
     * @param firewallId The ID of the Firewall resource.
     * @param [versionCreateRequest]
     */
    public createFirewallVersionWithHttpInfo(firewallId: number, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFirewallVersionWithHttpInfo(firewallId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new version by cloning.
     * Create a new Firewall version
     * @param firewallId The ID of the Firewall resource.
     * @param [versionCreateRequest]
     */
    public createFirewallVersion(firewallId: number, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFirewallVersion(firewallId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific version.
     * Delete a Firewall version
     * @param firewallId The ID of the Firewall resource.
     * @param versionId The identifier of the version.
     */
    public deleteFirewallVersionWithHttpInfo(firewallId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFirewallVersionWithHttpInfo(firewallId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific version.
     * Delete a Firewall version
     * @param firewallId The ID of the Firewall resource.
     * @param versionId The identifier of the version.
     */
    public deleteFirewallVersion(firewallId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFirewallVersion(firewallId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all versions of a specific Firewall.
     * List Firewall versions
     * @param firewallId The ID of the Firewall resource.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public listFirewallVersionsWithHttpInfo(firewallId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFirewallVersionsWithHttpInfo(firewallId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * List all versions of a specific Firewall.
     * List Firewall versions
     * @param firewallId The ID of the Firewall resource.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public listFirewallVersions(firewallId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFirewallVersions(firewallId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially update a draft version.
     * Partially update a Firewall version
     * @param firewallId The ID of the Firewall resource.
     * @param versionId The identifier of the version.
     * @param [patchedVersionCreateRequest]
     */
    public partialUpdateFirewallVersionWithHttpInfo(firewallId: number, versionId: string, patchedVersionCreateRequest?: PatchedVersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateFirewallVersionWithHttpInfo(firewallId, versionId, patchedVersionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially update a draft version.
     * Partially update a Firewall version
     * @param firewallId The ID of the Firewall resource.
     * @param versionId The identifier of the version.
     * @param [patchedVersionCreateRequest]
     */
    public partialUpdateFirewallVersion(firewallId: number, versionId: string, patchedVersionCreateRequest?: PatchedVersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateFirewallVersion(firewallId, versionId, patchedVersionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific version.
     * Retrieve a Firewall version
     * @param firewallId The ID of the Firewall resource.
     * @param versionId The identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveFirewallVersionWithHttpInfo(firewallId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveFirewallVersionWithHttpInfo(firewallId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific version.
     * Retrieve a Firewall version
     * @param firewallId The ID of the Firewall resource.
     * @param versionId The identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveFirewallVersion(firewallId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveFirewallVersion(firewallId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a draft version.
     * Update a Firewall version
     * @param firewallId The ID of the Firewall resource.
     * @param versionId The identifier of the version.
     * @param [versionCreateRequest]
     */
    public updateFirewallVersionWithHttpInfo(firewallId: number, versionId: string, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFirewallVersionWithHttpInfo(firewallId, versionId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a draft version.
     * Update a Firewall version
     * @param firewallId The ID of the Firewall resource.
     * @param versionId The identifier of the version.
     * @param [versionCreateRequest]
     */
    public updateFirewallVersion(firewallId: number, versionId: string, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFirewallVersion(firewallId, versionId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFirewallsApi } from './ObservableAPI';

import { FirewallsApiRequestFactory, FirewallsApiResponseProcessor} from "../apis/FirewallsApi";
export class PromiseFirewallsApi {
    private api: ObservableFirewallsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FirewallsApiRequestFactory,
        responseProcessor?: FirewallsApiResponseProcessor
    ) {
        this.api = new ObservableFirewallsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Firewall by performing a deep copy of an existing Firewall, including its Function Instances and Rules Engine.
     * Clone a Firewall
     * @param firewallId A unique integer value identifying the firewall.
     * @param cloneFirewallRequest
     */
    public cloneFirewallWithHttpInfo(firewallId: number, cloneFirewallRequest: CloneFirewallRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FirewallResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cloneFirewallWithHttpInfo(firewallId, cloneFirewallRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Firewall by performing a deep copy of an existing Firewall, including its Function Instances and Rules Engine.
     * Clone a Firewall
     * @param firewallId A unique integer value identifying the firewall.
     * @param cloneFirewallRequest
     */
    public cloneFirewall(firewallId: number, cloneFirewallRequest: CloneFirewallRequest, _options?: PromiseConfigurationOptions): Promise<FirewallResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cloneFirewall(firewallId, cloneFirewallRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Firewall for your account.
     * Create a Firewall
     * @param firewallRequest
     */
    public createFirewallWithHttpInfo(firewallRequest: FirewallRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FirewallResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFirewallWithHttpInfo(firewallRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Firewall for your account.
     * Create a Firewall
     * @param firewallRequest
     */
    public createFirewall(firewallRequest: FirewallRequest, _options?: PromiseConfigurationOptions): Promise<FirewallResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFirewall(firewallRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Firewall in your account.
     * Delete a Firewall
     * @param firewallId A unique integer value identifying the firewall.
     */
    public deleteFirewallWithHttpInfo(firewallId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFirewallWithHttpInfo(firewallId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Firewall in your account.
     * Delete a Firewall
     * @param firewallId A unique integer value identifying the firewall.
     */
    public deleteFirewall(firewallId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFirewall(firewallId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Firewalls owned by your account.
     * List Firewalls
     * @param [active] Filter by active status.
     * @param [debug] Filter by debug rules status.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listFirewallsWithHttpInfo(active?: boolean, debug?: boolean, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedFirewallList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFirewallsWithHttpInfo(active, debug, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Firewalls owned by your account.
     * List Firewalls
     * @param [active] Filter by active status.
     * @param [debug] Filter by debug rules status.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listFirewalls(active?: boolean, debug?: boolean, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedFirewallList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFirewalls(active, debug, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Firewall without affecting other fields.
     * Partially update a Firewall
     * @param firewallId A unique integer value identifying the firewall.
     * @param [patchedFirewallRequest]
     */
    public partialUpdateFirewallWithHttpInfo(firewallId: number, patchedFirewallRequest?: PatchedFirewallRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FirewallResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateFirewallWithHttpInfo(firewallId, patchedFirewallRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Firewall without affecting other fields.
     * Partially update a Firewall
     * @param firewallId A unique integer value identifying the firewall.
     * @param [patchedFirewallRequest]
     */
    public partialUpdateFirewall(firewallId: number, patchedFirewallRequest?: PatchedFirewallRequest, _options?: PromiseConfigurationOptions): Promise<FirewallResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateFirewall(firewallId, patchedFirewallRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific Firewall in your account.
     * Retrieve details from a Firewall
     * @param firewallId A unique integer value identifying the firewall.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveFirewallWithHttpInfo(firewallId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FirewallResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveFirewallWithHttpInfo(firewallId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific Firewall in your account.
     * Retrieve details from a Firewall
     * @param firewallId A unique integer value identifying the firewall.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveFirewall(firewallId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<FirewallResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveFirewall(firewallId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Firewall. This replaces the entire Firewall with the new data provided.
     * Update a Firewall
     * @param firewallId A unique integer value identifying the firewall.
     * @param firewallRequest
     */
    public updateFirewallWithHttpInfo(firewallId: number, firewallRequest: FirewallRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FirewallResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFirewallWithHttpInfo(firewallId, firewallRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Firewall. This replaces the entire Firewall with the new data provided.
     * Update a Firewall
     * @param firewallId A unique integer value identifying the firewall.
     * @param firewallRequest
     */
    public updateFirewall(firewallId: number, firewallRequest: FirewallRequest, _options?: PromiseConfigurationOptions): Promise<FirewallResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFirewall(firewallId, firewallRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFirewallsFunctionApi } from './ObservableAPI';

import { FirewallsFunctionApiRequestFactory, FirewallsFunctionApiResponseProcessor} from "../apis/FirewallsFunctionApi";
export class PromiseFirewallsFunctionApi {
    private api: ObservableFirewallsFunctionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FirewallsFunctionApiRequestFactory,
        responseProcessor?: FirewallsFunctionApiResponseProcessor
    ) {
        this.api = new ObservableFirewallsFunctionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Function Instance for a specific Firewall in your account.
     * Create an Firewall Function
     * @param firewallId A unique integer value identifying the firewall.
     * @param firewallFunctionInstanceRequest
     */
    public createFirewallFunctionWithHttpInfo(firewallId: number, firewallFunctionInstanceRequest: FirewallFunctionInstanceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FirewallFunctionInstanceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFirewallFunctionWithHttpInfo(firewallId, firewallFunctionInstanceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Function Instance for a specific Firewall in your account.
     * Create an Firewall Function
     * @param firewallId A unique integer value identifying the firewall.
     * @param firewallFunctionInstanceRequest
     */
    public createFirewallFunction(firewallId: number, firewallFunctionInstanceRequest: FirewallFunctionInstanceRequest, _options?: PromiseConfigurationOptions): Promise<FirewallFunctionInstanceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFirewallFunction(firewallId, firewallFunctionInstanceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Function Instance for a specific Firewall in your account.
     * Create an Firewall Function
     * @param firewallId A unique integer value identifying the firewall.
     * @param versionId The ULID identifier of the version.
     * @param firewallFunctionInstanceRequest
     */
    public createFirewallFunction2WithHttpInfo(firewallId: number, versionId: string, firewallFunctionInstanceRequest: FirewallFunctionInstanceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FirewallFunctionInstanceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFirewallFunction2WithHttpInfo(firewallId, versionId, firewallFunctionInstanceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Function Instance for a specific Firewall in your account.
     * Create an Firewall Function
     * @param firewallId A unique integer value identifying the firewall.
     * @param versionId The ULID identifier of the version.
     * @param firewallFunctionInstanceRequest
     */
    public createFirewallFunction2(firewallId: number, versionId: string, firewallFunctionInstanceRequest: FirewallFunctionInstanceRequest, _options?: PromiseConfigurationOptions): Promise<FirewallFunctionInstanceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFirewallFunction2(firewallId, versionId, firewallFunctionInstanceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Firewall Function Instance in your account.
     * Delete an Firewall Function
     * @param firewallId A unique integer value identifying the firewall.
     * @param functionId A unique integer value identifying the function instance.
     */
    public deleteFirewallFunctionWithHttpInfo(firewallId: number, functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFirewallFunctionWithHttpInfo(firewallId, functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Firewall Function Instance in your account.
     * Delete an Firewall Function
     * @param firewallId A unique integer value identifying the firewall.
     * @param functionId A unique integer value identifying the function instance.
     */
    public deleteFirewallFunction(firewallId: number, functionId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFirewallFunction(firewallId, functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Firewall Function Instance in your account.
     * Delete an Firewall Function
     * @param firewallId A unique integer value identifying the firewall.
     * @param functionId A unique integer value identifying the function instance.
     * @param versionId The ULID identifier of the version.
     */
    public deleteFirewallFunction2WithHttpInfo(firewallId: number, functionId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFirewallFunction2WithHttpInfo(firewallId, functionId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Firewall Function Instance in your account.
     * Delete an Firewall Function
     * @param firewallId A unique integer value identifying the firewall.
     * @param functionId A unique integer value identifying the function instance.
     * @param versionId The ULID identifier of the version.
     */
    public deleteFirewallFunction2(firewallId: number, functionId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFirewallFunction2(firewallId, functionId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Function Instances for a specific Firewall owned by your account.
     * List Firewall Function
     * @param firewallId A unique integer value identifying the firewall.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listFirewallFunctionWithHttpInfo(firewallId: number, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedFirewallFunctionInstanceList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFirewallFunctionWithHttpInfo(firewallId, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Function Instances for a specific Firewall owned by your account.
     * List Firewall Function
     * @param firewallId A unique integer value identifying the firewall.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listFirewallFunction(firewallId: number, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedFirewallFunctionInstanceList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFirewallFunction(firewallId, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Function Instances for a specific Firewall owned by your account.
     * List Firewall Function
     * @param firewallId A unique integer value identifying the firewall.
     * @param versionId The ULID identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listFirewallFunction2WithHttpInfo(firewallId: number, versionId: string, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedFirewallFunctionInstanceList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFirewallFunction2WithHttpInfo(firewallId, versionId, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Function Instances for a specific Firewall owned by your account.
     * List Firewall Function
     * @param firewallId A unique integer value identifying the firewall.
     * @param versionId The ULID identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listFirewallFunction2(firewallId: number, versionId: string, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedFirewallFunctionInstanceList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFirewallFunction2(firewallId, versionId, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Firewall Function Instance without affecting other fields.
     * Partially update an Firewall Function
     * @param firewallId A unique integer value identifying the firewall.
     * @param functionId A unique integer value identifying the function instance.
     * @param [patchedFirewallFunctionInstanceRequest]
     */
    public partialUpdateFirewallFunctionWithHttpInfo(firewallId: number, functionId: number, patchedFirewallFunctionInstanceRequest?: PatchedFirewallFunctionInstanceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FirewallFunctionInstanceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateFirewallFunctionWithHttpInfo(firewallId, functionId, patchedFirewallFunctionInstanceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Firewall Function Instance without affecting other fields.
     * Partially update an Firewall Function
     * @param firewallId A unique integer value identifying the firewall.
     * @param functionId A unique integer value identifying the function instance.
     * @param [patchedFirewallFunctionInstanceRequest]
     */
    public partialUpdateFirewallFunction(firewallId: number, functionId: number, patchedFirewallFunctionInstanceRequest?: PatchedFirewallFunctionInstanceRequest, _options?: PromiseConfigurationOptions): Promise<FirewallFunctionInstanceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateFirewallFunction(firewallId, functionId, patchedFirewallFunctionInstanceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Firewall Function Instance without affecting other fields.
     * Partially update an Firewall Function
     * @param firewallId A unique integer value identifying the firewall.
     * @param functionId A unique integer value identifying the function instance.
     * @param versionId The ULID identifier of the version.
     * @param [patchedFirewallFunctionInstanceRequest]
     */
    public partialUpdateFirewallFunction2WithHttpInfo(firewallId: number, functionId: number, versionId: string, patchedFirewallFunctionInstanceRequest?: PatchedFirewallFunctionInstanceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FirewallFunctionInstanceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateFirewallFunction2WithHttpInfo(firewallId, functionId, versionId, patchedFirewallFunctionInstanceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Firewall Function Instance without affecting other fields.
     * Partially update an Firewall Function
     * @param firewallId A unique integer value identifying the firewall.
     * @param functionId A unique integer value identifying the function instance.
     * @param versionId The ULID identifier of the version.
     * @param [patchedFirewallFunctionInstanceRequest]
     */
    public partialUpdateFirewallFunction2(firewallId: number, functionId: number, versionId: string, patchedFirewallFunctionInstanceRequest?: PatchedFirewallFunctionInstanceRequest, _options?: PromiseConfigurationOptions): Promise<FirewallFunctionInstanceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateFirewallFunction2(firewallId, functionId, versionId, patchedFirewallFunctionInstanceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Firewall Function Instance in your account.
     * Retrieve details of an Firewall Function
     * @param firewallId A unique integer value identifying the firewall.
     * @param functionId A unique integer value identifying the function instance.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveFirewallFunctionWithHttpInfo(firewallId: number, functionId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FirewallFunctionInstanceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveFirewallFunctionWithHttpInfo(firewallId, functionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Firewall Function Instance in your account.
     * Retrieve details of an Firewall Function
     * @param firewallId A unique integer value identifying the firewall.
     * @param functionId A unique integer value identifying the function instance.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveFirewallFunction(firewallId: number, functionId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<FirewallFunctionInstanceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveFirewallFunction(firewallId, functionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Firewall Function Instance in your account.
     * Retrieve details of an Firewall Function
     * @param firewallId A unique integer value identifying the firewall.
     * @param functionId A unique integer value identifying the function instance.
     * @param versionId The ULID identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveFirewallFunction2WithHttpInfo(firewallId: number, functionId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FirewallFunctionInstanceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveFirewallFunction2WithHttpInfo(firewallId, functionId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Firewall Function Instance in your account.
     * Retrieve details of an Firewall Function
     * @param firewallId A unique integer value identifying the firewall.
     * @param functionId A unique integer value identifying the function instance.
     * @param versionId The ULID identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveFirewallFunction2(firewallId: number, functionId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<FirewallFunctionInstanceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveFirewallFunction2(firewallId, functionId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Firewall Function Instance. This replaces the entire Function Instance with the new data provided.
     * Update an Firewall Function
     * @param firewallId A unique integer value identifying the firewall.
     * @param functionId A unique integer value identifying the function instance.
     * @param firewallFunctionInstanceRequest
     */
    public updateFirewallFunctionWithHttpInfo(firewallId: number, functionId: number, firewallFunctionInstanceRequest: FirewallFunctionInstanceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FirewallFunctionInstanceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFirewallFunctionWithHttpInfo(firewallId, functionId, firewallFunctionInstanceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Firewall Function Instance. This replaces the entire Function Instance with the new data provided.
     * Update an Firewall Function
     * @param firewallId A unique integer value identifying the firewall.
     * @param functionId A unique integer value identifying the function instance.
     * @param firewallFunctionInstanceRequest
     */
    public updateFirewallFunction(firewallId: number, functionId: number, firewallFunctionInstanceRequest: FirewallFunctionInstanceRequest, _options?: PromiseConfigurationOptions): Promise<FirewallFunctionInstanceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFirewallFunction(firewallId, functionId, firewallFunctionInstanceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Firewall Function Instance. This replaces the entire Function Instance with the new data provided.
     * Update an Firewall Function
     * @param firewallId A unique integer value identifying the firewall.
     * @param functionId A unique integer value identifying the function instance.
     * @param versionId The ULID identifier of the version.
     * @param firewallFunctionInstanceRequest
     */
    public updateFirewallFunction2WithHttpInfo(firewallId: number, functionId: number, versionId: string, firewallFunctionInstanceRequest: FirewallFunctionInstanceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FirewallFunctionInstanceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFirewallFunction2WithHttpInfo(firewallId, functionId, versionId, firewallFunctionInstanceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Firewall Function Instance. This replaces the entire Function Instance with the new data provided.
     * Update an Firewall Function
     * @param firewallId A unique integer value identifying the firewall.
     * @param functionId A unique integer value identifying the function instance.
     * @param versionId The ULID identifier of the version.
     * @param firewallFunctionInstanceRequest
     */
    public updateFirewallFunction2(firewallId: number, functionId: number, versionId: string, firewallFunctionInstanceRequest: FirewallFunctionInstanceRequest, _options?: PromiseConfigurationOptions): Promise<FirewallFunctionInstanceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFirewallFunction2(firewallId, functionId, versionId, firewallFunctionInstanceRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFirewallsRulesEngineApi } from './ObservableAPI';

import { FirewallsRulesEngineApiRequestFactory, FirewallsRulesEngineApiResponseProcessor} from "../apis/FirewallsRulesEngineApi";
export class PromiseFirewallsRulesEngineApi {
    private api: ObservableFirewallsRulesEngineApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FirewallsRulesEngineApiRequestFactory,
        responseProcessor?: FirewallsRulesEngineApiResponseProcessor
    ) {
        this.api = new ObservableFirewallsRulesEngineApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Rule for a specific Firewall in your account.
     * Create an Firewall Rule
     * @param firewallId A unique integer value identifying the firewall.
     * @param firewallRuleRequest
     */
    public createFirewallRuleWithHttpInfo(firewallId: number, firewallRuleRequest: FirewallRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FirewallRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFirewallRuleWithHttpInfo(firewallId, firewallRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Rule for a specific Firewall in your account.
     * Create an Firewall Rule
     * @param firewallId A unique integer value identifying the firewall.
     * @param firewallRuleRequest
     */
    public createFirewallRule(firewallId: number, firewallRuleRequest: FirewallRuleRequest, _options?: PromiseConfigurationOptions): Promise<FirewallRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFirewallRule(firewallId, firewallRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Rule for a specific Firewall in your account.
     * Create an Firewall Rule
     * @param firewallId A unique integer value identifying the firewall.
     * @param versionId The ULID identifier of the version.
     * @param firewallRuleRequest
     */
    public createFirewallRule2WithHttpInfo(firewallId: number, versionId: string, firewallRuleRequest: FirewallRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FirewallRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFirewallRule2WithHttpInfo(firewallId, versionId, firewallRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Rule for a specific Firewall in your account.
     * Create an Firewall Rule
     * @param firewallId A unique integer value identifying the firewall.
     * @param versionId The ULID identifier of the version.
     * @param firewallRuleRequest
     */
    public createFirewallRule2(firewallId: number, versionId: string, firewallRuleRequest: FirewallRuleRequest, _options?: PromiseConfigurationOptions): Promise<FirewallRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFirewallRule2(firewallId, versionId, firewallRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Rule in your account.
     * Delete an Firewall Rule
     * @param firewallId A unique integer value identifying the firewall.
     * @param requestRuleId A unique integer value identifying the request rule.
     */
    public deleteFirewallRuleWithHttpInfo(firewallId: number, requestRuleId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFirewallRuleWithHttpInfo(firewallId, requestRuleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Rule in your account.
     * Delete an Firewall Rule
     * @param firewallId A unique integer value identifying the firewall.
     * @param requestRuleId A unique integer value identifying the request rule.
     */
    public deleteFirewallRule(firewallId: number, requestRuleId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFirewallRule(firewallId, requestRuleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Rule in your account.
     * Delete an Firewall Rule
     * @param firewallId A unique integer value identifying the firewall.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param versionId The ULID identifier of the version.
     */
    public deleteFirewallRule2WithHttpInfo(firewallId: number, requestRuleId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFirewallRule2WithHttpInfo(firewallId, requestRuleId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Rule in your account.
     * Delete an Firewall Rule
     * @param firewallId A unique integer value identifying the firewall.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param versionId The ULID identifier of the version.
     */
    public deleteFirewallRule2(firewallId: number, requestRuleId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFirewallRule2(firewallId, requestRuleId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Rules for a specific Firewall owned by your account.
     * List Firewall Rules
     * @param firewallId A unique integer value identifying the firewall.
     * @param [description] Filter by description (case-insensitive, partial match).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [orderGte] Filter by order (greater than or equal).
     * @param [orderLte] Filter by order (less than or equal).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listFirewallRulesWithHttpInfo(firewallId: number, description?: string, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, orderGte?: number, orderLte?: number, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedFirewallRuleList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFirewallRulesWithHttpInfo(firewallId, description, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, orderGte, orderLte, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Rules for a specific Firewall owned by your account.
     * List Firewall Rules
     * @param firewallId A unique integer value identifying the firewall.
     * @param [description] Filter by description (case-insensitive, partial match).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [orderGte] Filter by order (greater than or equal).
     * @param [orderLte] Filter by order (less than or equal).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listFirewallRules(firewallId: number, description?: string, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, orderGte?: number, orderLte?: number, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedFirewallRuleList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFirewallRules(firewallId, description, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, orderGte, orderLte, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Rules for a specific Firewall owned by your account.
     * List Firewall Rules
     * @param firewallId A unique integer value identifying the firewall.
     * @param versionId The ULID identifier of the version.
     * @param [description] Filter by description (case-insensitive, partial match).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [orderGte] Filter by order (greater than or equal).
     * @param [orderLte] Filter by order (less than or equal).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listFirewallRules2WithHttpInfo(firewallId: number, versionId: string, description?: string, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, orderGte?: number, orderLte?: number, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedFirewallRuleList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFirewallRules2WithHttpInfo(firewallId, versionId, description, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, orderGte, orderLte, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Rules for a specific Firewall owned by your account.
     * List Firewall Rules
     * @param firewallId A unique integer value identifying the firewall.
     * @param versionId The ULID identifier of the version.
     * @param [description] Filter by description (case-insensitive, partial match).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [orderGte] Filter by order (greater than or equal).
     * @param [orderLte] Filter by order (less than or equal).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listFirewallRules2(firewallId: number, versionId: string, description?: string, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, orderGte?: number, orderLte?: number, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedFirewallRuleList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFirewallRules2(firewallId, versionId, description, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, orderGte, orderLte, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Reorder all Rules for a specific Firewall owned by your account.
     * Ordering Firewall Rules
     * @param firewallId A unique integer value identifying the firewall.
     * @param firewallRuleEngineOrderRequest
     * @param [search] A search term.
     */
    public orderFirewallRulesWithHttpInfo(firewallId: number, firewallRuleEngineOrderRequest: FirewallRuleEngineOrderRequest, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedFirewallRuleList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.orderFirewallRulesWithHttpInfo(firewallId, firewallRuleEngineOrderRequest, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Reorder all Rules for a specific Firewall owned by your account.
     * Ordering Firewall Rules
     * @param firewallId A unique integer value identifying the firewall.
     * @param firewallRuleEngineOrderRequest
     * @param [search] A search term.
     */
    public orderFirewallRules(firewallId: number, firewallRuleEngineOrderRequest: FirewallRuleEngineOrderRequest, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedFirewallRuleList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.orderFirewallRules(firewallId, firewallRuleEngineOrderRequest, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Reorder all Rules for a specific Firewall owned by your account.
     * Ordering Firewall Rules
     * @param firewallId A unique integer value identifying the firewall.
     * @param versionId The ULID identifier of the version.
     * @param firewallRuleEngineOrderRequest
     * @param [search] A search term.
     */
    public orderFirewallRules2WithHttpInfo(firewallId: number, versionId: string, firewallRuleEngineOrderRequest: FirewallRuleEngineOrderRequest, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedFirewallRuleList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.orderFirewallRules2WithHttpInfo(firewallId, versionId, firewallRuleEngineOrderRequest, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Reorder all Rules for a specific Firewall owned by your account.
     * Ordering Firewall Rules
     * @param firewallId A unique integer value identifying the firewall.
     * @param versionId The ULID identifier of the version.
     * @param firewallRuleEngineOrderRequest
     * @param [search] A search term.
     */
    public orderFirewallRules2(firewallId: number, versionId: string, firewallRuleEngineOrderRequest: FirewallRuleEngineOrderRequest, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedFirewallRuleList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.orderFirewallRules2(firewallId, versionId, firewallRuleEngineOrderRequest, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Firewall Rule without affecting other fields.
     * Partially update an Firewall Rule
     * @param firewallId A unique integer value identifying the firewall.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param [patchedFirewallRuleRequest]
     */
    public partialUpdateFirewallRuleWithHttpInfo(firewallId: number, requestRuleId: number, patchedFirewallRuleRequest?: PatchedFirewallRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FirewallRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateFirewallRuleWithHttpInfo(firewallId, requestRuleId, patchedFirewallRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Firewall Rule without affecting other fields.
     * Partially update an Firewall Rule
     * @param firewallId A unique integer value identifying the firewall.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param [patchedFirewallRuleRequest]
     */
    public partialUpdateFirewallRule(firewallId: number, requestRuleId: number, patchedFirewallRuleRequest?: PatchedFirewallRuleRequest, _options?: PromiseConfigurationOptions): Promise<FirewallRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateFirewallRule(firewallId, requestRuleId, patchedFirewallRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Firewall Rule without affecting other fields.
     * Partially update an Firewall Rule
     * @param firewallId A unique integer value identifying the firewall.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param versionId The ULID identifier of the version.
     * @param [patchedFirewallRuleRequest]
     */
    public partialUpdateFirewallRule2WithHttpInfo(firewallId: number, requestRuleId: number, versionId: string, patchedFirewallRuleRequest?: PatchedFirewallRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FirewallRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateFirewallRule2WithHttpInfo(firewallId, requestRuleId, versionId, patchedFirewallRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Firewall Rule without affecting other fields.
     * Partially update an Firewall Rule
     * @param firewallId A unique integer value identifying the firewall.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param versionId The ULID identifier of the version.
     * @param [patchedFirewallRuleRequest]
     */
    public partialUpdateFirewallRule2(firewallId: number, requestRuleId: number, versionId: string, patchedFirewallRuleRequest?: PatchedFirewallRuleRequest, _options?: PromiseConfigurationOptions): Promise<FirewallRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateFirewallRule2(firewallId, requestRuleId, versionId, patchedFirewallRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Rule in your account.
     * Retrieve details of an Firewall Rule
     * @param firewallId A unique integer value identifying the firewall.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveFirewallRuleWithHttpInfo(firewallId: number, requestRuleId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FirewallRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveFirewallRuleWithHttpInfo(firewallId, requestRuleId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Rule in your account.
     * Retrieve details of an Firewall Rule
     * @param firewallId A unique integer value identifying the firewall.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveFirewallRule(firewallId: number, requestRuleId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<FirewallRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveFirewallRule(firewallId, requestRuleId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Rule in your account.
     * Retrieve details of an Firewall Rule
     * @param firewallId A unique integer value identifying the firewall.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param versionId The ULID identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveFirewallRule2WithHttpInfo(firewallId: number, requestRuleId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FirewallRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveFirewallRule2WithHttpInfo(firewallId, requestRuleId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Rule in your account.
     * Retrieve details of an Firewall Rule
     * @param firewallId A unique integer value identifying the firewall.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param versionId The ULID identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveFirewallRule2(firewallId: number, requestRuleId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<FirewallRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveFirewallRule2(firewallId, requestRuleId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Rule. This replaces the entire Rule with the new data provided.
     * Update an Firewall Rule
     * @param firewallId A unique integer value identifying the firewall.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param firewallRuleRequest
     */
    public updateFirewallRuleWithHttpInfo(firewallId: number, requestRuleId: number, firewallRuleRequest: FirewallRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FirewallRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFirewallRuleWithHttpInfo(firewallId, requestRuleId, firewallRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Rule. This replaces the entire Rule with the new data provided.
     * Update an Firewall Rule
     * @param firewallId A unique integer value identifying the firewall.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param firewallRuleRequest
     */
    public updateFirewallRule(firewallId: number, requestRuleId: number, firewallRuleRequest: FirewallRuleRequest, _options?: PromiseConfigurationOptions): Promise<FirewallRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFirewallRule(firewallId, requestRuleId, firewallRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Rule. This replaces the entire Rule with the new data provided.
     * Update an Firewall Rule
     * @param firewallId A unique integer value identifying the firewall.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param versionId The ULID identifier of the version.
     * @param firewallRuleRequest
     */
    public updateFirewallRule2WithHttpInfo(firewallId: number, requestRuleId: number, versionId: string, firewallRuleRequest: FirewallRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FirewallRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFirewallRule2WithHttpInfo(firewallId, requestRuleId, versionId, firewallRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Rule. This replaces the entire Rule with the new data provided.
     * Update an Firewall Rule
     * @param firewallId A unique integer value identifying the firewall.
     * @param requestRuleId A unique integer value identifying the request rule.
     * @param versionId The ULID identifier of the version.
     * @param firewallRuleRequest
     */
    public updateFirewallRule2(firewallId: number, requestRuleId: number, versionId: string, firewallRuleRequest: FirewallRuleRequest, _options?: PromiseConfigurationOptions): Promise<FirewallRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFirewallRule2(firewallId, requestRuleId, versionId, firewallRuleRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFunctionVersionsApi } from './ObservableAPI';

import { FunctionVersionsApiRequestFactory, FunctionVersionsApiResponseProcessor} from "../apis/FunctionVersionsApi";
export class PromiseFunctionVersionsApi {
    private api: ObservableFunctionVersionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FunctionVersionsApiRequestFactory,
        responseProcessor?: FunctionVersionsApiResponseProcessor
    ) {
        this.api = new ObservableFunctionVersionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a ready version.
     * Archive a Function version
     * @param functionId The ID of the Function resource.
     * @param versionId The identifier of the version.
     * @param [versionArchiveRequest]
     */
    public archiveFunctionVersionWithHttpInfo(functionId: number, versionId: string, versionArchiveRequest?: VersionArchiveRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.archiveFunctionVersionWithHttpInfo(functionId, versionId, versionArchiveRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Archive a ready version.
     * Archive a Function version
     * @param functionId The ID of the Function resource.
     * @param versionId The identifier of the version.
     * @param [versionArchiveRequest]
     */
    public archiveFunctionVersion(functionId: number, versionId: string, versionArchiveRequest?: VersionArchiveRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.archiveFunctionVersion(functionId, versionId, versionArchiveRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build a Function version
     * @param functionId The ID of the Function resource.
     * @param versionId The identifier of the version.
     * @param [versionBuildRequest]
     */
    public buildFunctionVersionWithHttpInfo(functionId: number, versionId: string, versionBuildRequest?: VersionBuildRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.buildFunctionVersionWithHttpInfo(functionId, versionId, versionBuildRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build a Function version
     * @param functionId The ID of the Function resource.
     * @param versionId The identifier of the version.
     * @param [versionBuildRequest]
     */
    public buildFunctionVersion(functionId: number, versionId: string, versionBuildRequest?: VersionBuildRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.buildFunctionVersion(functionId, versionId, versionBuildRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel a Function version build
     * @param functionId The ID of the Function resource.
     * @param versionId The identifier of the version.
     * @param [versionCancelRequest]
     */
    public cancelFunctionVersionBuildWithHttpInfo(functionId: number, versionId: string, versionCancelRequest?: VersionCancelRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cancelFunctionVersionBuildWithHttpInfo(functionId, versionId, versionCancelRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel a Function version build
     * @param functionId The ID of the Function resource.
     * @param versionId The identifier of the version.
     * @param [versionCancelRequest]
     */
    public cancelFunctionVersionBuild(functionId: number, versionId: string, versionCancelRequest?: VersionCancelRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cancelFunctionVersionBuild(functionId, versionId, versionCancelRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new version by cloning.
     * Create a new Function version
     * @param functionId The ID of the Function resource.
     * @param [versionCreateRequest]
     */
    public createFunctionVersionWithHttpInfo(functionId: number, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFunctionVersionWithHttpInfo(functionId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new version by cloning.
     * Create a new Function version
     * @param functionId The ID of the Function resource.
     * @param [versionCreateRequest]
     */
    public createFunctionVersion(functionId: number, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFunctionVersion(functionId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific version.
     * Delete a Function version
     * @param functionId The ID of the Function resource.
     * @param versionId The identifier of the version.
     */
    public deleteFunctionVersionWithHttpInfo(functionId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFunctionVersionWithHttpInfo(functionId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific version.
     * Delete a Function version
     * @param functionId The ID of the Function resource.
     * @param versionId The identifier of the version.
     */
    public deleteFunctionVersion(functionId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFunctionVersion(functionId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all versions of a specific Function.
     * List Function versions
     * @param functionId The ID of the Function resource.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public listFunctionVersionsWithHttpInfo(functionId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFunctionVersionsWithHttpInfo(functionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * List all versions of a specific Function.
     * List Function versions
     * @param functionId The ID of the Function resource.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public listFunctionVersions(functionId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFunctionVersions(functionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially update a draft version.
     * Partially update a Function version
     * @param functionId The ID of the Function resource.
     * @param versionId The identifier of the version.
     * @param [patchedVersionCreateRequest]
     */
    public partialUpdateFunctionVersionWithHttpInfo(functionId: number, versionId: string, patchedVersionCreateRequest?: PatchedVersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateFunctionVersionWithHttpInfo(functionId, versionId, patchedVersionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially update a draft version.
     * Partially update a Function version
     * @param functionId The ID of the Function resource.
     * @param versionId The identifier of the version.
     * @param [patchedVersionCreateRequest]
     */
    public partialUpdateFunctionVersion(functionId: number, versionId: string, patchedVersionCreateRequest?: PatchedVersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateFunctionVersion(functionId, versionId, patchedVersionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific version.
     * Retrieve a Function version
     * @param functionId The ID of the Function resource.
     * @param versionId The identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveFunctionVersionWithHttpInfo(functionId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveFunctionVersionWithHttpInfo(functionId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific version.
     * Retrieve a Function version
     * @param functionId The ID of the Function resource.
     * @param versionId The identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveFunctionVersion(functionId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveFunctionVersion(functionId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a draft version.
     * Update a Function version
     * @param functionId The ID of the Function resource.
     * @param versionId The identifier of the version.
     * @param [versionCreateRequest]
     */
    public updateFunctionVersionWithHttpInfo(functionId: number, versionId: string, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFunctionVersionWithHttpInfo(functionId, versionId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a draft version.
     * Update a Function version
     * @param functionId The ID of the Function resource.
     * @param versionId The identifier of the version.
     * @param [versionCreateRequest]
     */
    public updateFunctionVersion(functionId: number, versionId: string, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFunctionVersion(functionId, versionId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFunctionsApi } from './ObservableAPI';

import { FunctionsApiRequestFactory, FunctionsApiResponseProcessor} from "../apis/FunctionsApi";
export class PromiseFunctionsApi {
    private api: ObservableFunctionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FunctionsApiRequestFactory,
        responseProcessor?: FunctionsApiResponseProcessor
    ) {
        this.api = new ObservableFunctionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Function in your account.
     * Create an Function
     * @param functionsRequest
     */
    public createFunctionWithHttpInfo(functionsRequest: FunctionsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FunctionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFunctionWithHttpInfo(functionsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Function in your account.
     * Create an Function
     * @param functionsRequest
     */
    public createFunction(functionsRequest: FunctionsRequest, _options?: PromiseConfigurationOptions): Promise<FunctionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFunction(functionsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Function in your account.
     * Delete an Function
     * @param functionId A unique integer value identifying the function.
     */
    public deleteFunctionWithHttpInfo(functionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFunctionWithHttpInfo(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Function in your account.
     * Delete an Function
     * @param functionId A unique integer value identifying the function.
     */
    public deleteFunction(functionId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFunction(functionId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Functions owned by your account.
     * List Functions
     * @param [active] Filter by active status.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [languageIn] Filter by language (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [runtimeEnvironmentIn] Filter by runtime environment (accepts comma-separated values).
     * @param [search] A search term.
     */
    public listFunctionsWithHttpInfo(active?: boolean, fields?: string, id?: number, languageIn?: string, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, runtimeEnvironmentIn?: string, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedEdgeFunctionList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFunctionsWithHttpInfo(active, fields, id, languageIn, lastEditor, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, runtimeEnvironmentIn, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Functions owned by your account.
     * List Functions
     * @param [active] Filter by active status.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [languageIn] Filter by language (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [runtimeEnvironmentIn] Filter by runtime environment (accepts comma-separated values).
     * @param [search] A search term.
     */
    public listFunctions(active?: boolean, fields?: string, id?: number, languageIn?: string, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, runtimeEnvironmentIn?: string, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedEdgeFunctionList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFunctions(active, fields, id, languageIn, lastEditor, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, runtimeEnvironmentIn, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Function without affecting other fields.
     * Partially update an Function
     * @param functionId A unique integer value identifying the function.
     * @param [patchedFunctionsRequest]
     */
    public partialUpdateFunctionWithHttpInfo(functionId: number, patchedFunctionsRequest?: PatchedFunctionsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FunctionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateFunctionWithHttpInfo(functionId, patchedFunctionsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Function without affecting other fields.
     * Partially update an Function
     * @param functionId A unique integer value identifying the function.
     * @param [patchedFunctionsRequest]
     */
    public partialUpdateFunction(functionId: number, patchedFunctionsRequest?: PatchedFunctionsRequest, _options?: PromiseConfigurationOptions): Promise<FunctionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateFunction(functionId, patchedFunctionsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Function in your account.
     * Retrieve details of an Function
     * @param functionId A unique integer value identifying the function.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveFunctionWithHttpInfo(functionId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FunctionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveFunctionWithHttpInfo(functionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Function in your account.
     * Retrieve details of an Function
     * @param functionId A unique integer value identifying the function.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveFunction(functionId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<FunctionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveFunction(functionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Function. This replaces the entire Function with the new data provided.
     * Update an Function
     * @param functionId A unique integer value identifying the function.
     * @param functionsRequest
     */
    public updateFunctionWithHttpInfo(functionId: number, functionsRequest: FunctionsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FunctionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFunctionWithHttpInfo(functionId, functionsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Function. This replaces the entire Function with the new data provided.
     * Update an Function
     * @param functionId A unique integer value identifying the function.
     * @param functionsRequest
     */
    public updateFunction(functionId: number, functionsRequest: FunctionsRequest, _options?: PromiseConfigurationOptions): Promise<FunctionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFunction(functionId, functionsRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableIdentityGrantsApi } from './ObservableAPI';

import { IdentityGrantsApiRequestFactory, IdentityGrantsApiResponseProcessor} from "../apis/IdentityGrantsApi";
export class PromiseIdentityGrantsApi {
    private api: ObservableIdentityGrantsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IdentityGrantsApiRequestFactory,
        responseProcessor?: IdentityGrantsApiResponseProcessor
    ) {
        this.api = new ObservableIdentityGrantsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new grant, optionally linked to an identity, for the logged-in account or its descendant accounts.
     * Create a new grant
     * @param grantRequest
     */
    public createGrantWithHttpInfo(grantRequest: GrantRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseGrant>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createGrantWithHttpInfo(grantRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new grant, optionally linked to an identity, for the logged-in account or its descendant accounts.
     * Create a new grant
     * @param grantRequest
     */
    public createGrant(grantRequest: GrantRequest, _options?: PromiseConfigurationOptions): Promise<ResponseGrant> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createGrant(grantRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific grant from the logged-in account or its descendant accounts.
     * Delete a grant
     * @param grantId
     */
    public deleteGrantWithHttpInfo(grantId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseDeleteGrant>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteGrantWithHttpInfo(grantId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific grant from the logged-in account or its descendant accounts.
     * Delete a grant
     * @param grantId
     */
    public deleteGrant(grantId: string, _options?: PromiseConfigurationOptions): Promise<ResponseDeleteGrant> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteGrant(grantId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of all grants associated with the logged-in account or its descendant accounts.
     * List grants for the account
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listGrantsWithHttpInfo(fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedGrantList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listGrantsWithHttpInfo(fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of all grants associated with the logged-in account or its descendant accounts.
     * List grants for the account
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listGrants(fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedGrantList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listGrants(fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates specific fields of an existing grant within the logged-in account or its descendant accounts, leaving other fields unchanged.
     * Partially update a grant
     * @param grantId
     * @param [patchedGrantRequest]
     */
    public partialUpdateGrantWithHttpInfo(grantId: string, patchedGrantRequest?: PatchedGrantRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseGrant>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateGrantWithHttpInfo(grantId, patchedGrantRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates specific fields of an existing grant within the logged-in account or its descendant accounts, leaving other fields unchanged.
     * Partially update a grant
     * @param grantId
     * @param [patchedGrantRequest]
     */
    public partialUpdateGrant(grantId: string, patchedGrantRequest?: PatchedGrantRequest, _options?: PromiseConfigurationOptions): Promise<ResponseGrant> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateGrant(grantId, patchedGrantRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Fetches detailed information about a specific grant within the logged-in account or its descendant accounts.
     * Retrieve grant details
     * @param grantId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveGrantWithHttpInfo(grantId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseRetrieveGrant>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveGrantWithHttpInfo(grantId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Fetches detailed information about a specific grant within the logged-in account or its descendant accounts.
     * Retrieve grant details
     * @param grantId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveGrant(grantId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<ResponseRetrieveGrant> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveGrant(grantId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an existing grant within the logged-in account or its descendant accounts. This operation replaces the entire grant with the provided data.
     * Update a grant
     * @param grantId
     * @param grantRequest
     */
    public updateGrantWithHttpInfo(grantId: string, grantRequest: GrantRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseGrant>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateGrantWithHttpInfo(grantId, grantRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an existing grant within the logged-in account or its descendant accounts. This operation replaces the entire grant with the provided data.
     * Update a grant
     * @param grantId
     * @param grantRequest
     */
    public updateGrant(grantId: string, grantRequest: GrantRequest, _options?: PromiseConfigurationOptions): Promise<ResponseGrant> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateGrant(grantId, grantRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableIdentityGroupMembersApi } from './ObservableAPI';

import { IdentityGroupMembersApiRequestFactory, IdentityGroupMembersApiResponseProcessor} from "../apis/IdentityGroupMembersApi";
export class PromiseIdentityGroupMembersApi {
    private api: ObservableIdentityGroupMembersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IdentityGroupMembersApiRequestFactory,
        responseProcessor?: IdentityGroupMembersApiResponseProcessor
    ) {
        this.api = new ObservableIdentityGroupMembersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve members from a specific group in your account.
     * Retrieve members from a group
     * @param id
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveMembersGroupWithHttpInfo(id: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseRetrieveGroupMembers>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveMembersGroupWithHttpInfo(id, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve members from a specific group in your account.
     * Retrieve members from a group
     * @param id
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveMembersGroup(id: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<ResponseRetrieveGroupMembers> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveMembersGroup(id, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update all members from a group. This replaces the entire group members with the new data provided.
     * Update members from a group
     * @param id
     * @param groupMembersRequest
     */
    public updateMembersGroupWithHttpInfo(id: number, groupMembersRequest: GroupMembersRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseGroupMembers>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateMembersGroupWithHttpInfo(id, groupMembersRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update all members from a group. This replaces the entire group members with the new data provided.
     * Update members from a group
     * @param id
     * @param groupMembersRequest
     */
    public updateMembersGroup(id: number, groupMembersRequest: GroupMembersRequest, _options?: PromiseConfigurationOptions): Promise<ResponseGroupMembers> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateMembersGroup(id, groupMembersRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableIdentityGroupsApi } from './ObservableAPI';

import { IdentityGroupsApiRequestFactory, IdentityGroupsApiResponseProcessor} from "../apis/IdentityGroupsApi";
export class PromiseIdentityGroupsApi {
    private api: ObservableIdentityGroupsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IdentityGroupsApiRequestFactory,
        responseProcessor?: IdentityGroupsApiResponseProcessor
    ) {
        this.api = new ObservableIdentityGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a group for your account.
     * Create a new group
     * @param groupRequest
     */
    public createGroupWithHttpInfo(groupRequest: GroupRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseGroup>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createGroupWithHttpInfo(groupRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a group for your account.
     * Create a new group
     * @param groupRequest
     */
    public createGroup(groupRequest: GroupRequest, _options?: PromiseConfigurationOptions): Promise<ResponseGroup> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createGroup(groupRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific group in your account.
     * Delete a group
     * @param groupId
     */
    public deleteGroupWithHttpInfo(groupId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseDeleteGroup>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteGroupWithHttpInfo(groupId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific group in your account.
     * Delete a group
     * @param groupId
     */
    public deleteGroup(groupId: string, _options?: PromiseConfigurationOptions): Promise<ResponseDeleteGroup> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteGroup(groupId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all groups owned by your account.
     * List of the account groups
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listGroupWithHttpInfo(fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedGroupList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listGroupWithHttpInfo(fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all groups owned by your account.
     * List of the account groups
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listGroup(fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedGroupList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listGroup(fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing group without affecting other fields.
     * Partially update a group
     * @param groupId
     * @param [patchedGroupRequest]
     */
    public partialUpdateGroupWithHttpInfo(groupId: string, patchedGroupRequest?: PatchedGroupRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseGroup>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateGroupWithHttpInfo(groupId, patchedGroupRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing group without affecting other fields.
     * Partially update a group
     * @param groupId
     * @param [patchedGroupRequest]
     */
    public partialUpdateGroup(groupId: string, patchedGroupRequest?: PatchedGroupRequest, _options?: PromiseConfigurationOptions): Promise<ResponseGroup> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateGroup(groupId, patchedGroupRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific group in your account.
     * Retrieve details from a group
     * @param groupId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveGroupWithHttpInfo(groupId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseRetrieveGroup>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveGroupWithHttpInfo(groupId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific group in your account.
     * Retrieve details from a group
     * @param groupId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveGroup(groupId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<ResponseRetrieveGroup> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveGroup(groupId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing group. This replaces the entire group with the new data provided.
     * Update a group
     * @param groupId
     * @param groupRequest
     */
    public updateGroupWithHttpInfo(groupId: string, groupRequest: GroupRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseGroup>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateGroupWithHttpInfo(groupId, groupRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing group. This replaces the entire group with the new data provided.
     * Update a group
     * @param groupId
     * @param groupRequest
     */
    public updateGroup(groupId: string, groupRequest: GroupRequest, _options?: PromiseConfigurationOptions): Promise<ResponseGroup> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateGroup(groupId, groupRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableIdentityLoggedInUserApi } from './ObservableAPI';

import { IdentityLoggedInUserApiRequestFactory, IdentityLoggedInUserApiResponseProcessor} from "../apis/IdentityLoggedInUserApi";
export class PromiseIdentityLoggedInUserApi {
    private api: ObservableIdentityLoggedInUserApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IdentityLoggedInUserApiRequestFactory,
        responseProcessor?: IdentityLoggedInUserApiResponseProcessor
    ) {
        this.api = new ObservableIdentityLoggedInUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve details from the logged user.
     * Retrieve details from the currently logged-in user
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public listLoggedUserWithHttpInfo(fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseRetrieveUser>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listLoggedUserWithHttpInfo(fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from the logged user.
     * Retrieve details from the currently logged-in user
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public listLoggedUser(fields?: string, _options?: PromiseConfigurationOptions): Promise<ResponseRetrieveUser> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listLoggedUser(fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of the logged user without affecting other fields.
     * Partially update the currently logged-in user
     * @param [patchedUserRequest]
     */
    public partialUpdateLoggedUserWithHttpInfo(patchedUserRequest?: PatchedUserRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseUser>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateLoggedUserWithHttpInfo(patchedUserRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of the logged user without affecting other fields.
     * Partially update the currently logged-in user
     * @param [patchedUserRequest]
     */
    public partialUpdateLoggedUser(patchedUserRequest?: PatchedUserRequest, _options?: PromiseConfigurationOptions): Promise<ResponseUser> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateLoggedUser(patchedUserRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the logged user. This replaces the entire user with the new data provided.
     * Update the currently logged-in user
     * @param userRequest
     */
    public updateLoggedUserWithHttpInfo(userRequest: UserRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseUser>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLoggedUserWithHttpInfo(userRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the logged user. This replaces the entire user with the new data provided.
     * Update the currently logged-in user
     * @param userRequest
     */
    public updateLoggedUser(userRequest: UserRequest, _options?: PromiseConfigurationOptions): Promise<ResponseUser> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLoggedUser(userRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableIdentityServiceTokenRenewApi } from './ObservableAPI';

import { IdentityServiceTokenRenewApiRequestFactory, IdentityServiceTokenRenewApiResponseProcessor} from "../apis/IdentityServiceTokenRenewApi";
export class PromiseIdentityServiceTokenRenewApi {
    private api: ObservableIdentityServiceTokenRenewApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IdentityServiceTokenRenewApiRequestFactory,
        responseProcessor?: IdentityServiceTokenRenewApiResponseProcessor
    ) {
        this.api = new ObservableIdentityServiceTokenRenewApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Renews a service token for your account.
     * Renews a service token
     * @param id
     * @param serviceTokenRenewRequest
     */
    public renewServiceTokenWithHttpInfo(id: number, serviceTokenRenewRequest: ServiceTokenRenewRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseServiceTokenRenew>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.renewServiceTokenWithHttpInfo(id, serviceTokenRenewRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Renews a service token for your account.
     * Renews a service token
     * @param id
     * @param serviceTokenRenewRequest
     */
    public renewServiceToken(id: number, serviceTokenRenewRequest: ServiceTokenRenewRequest, _options?: PromiseConfigurationOptions): Promise<ResponseServiceTokenRenew> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.renewServiceToken(id, serviceTokenRenewRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableIdentityServiceTokensApi } from './ObservableAPI';

import { IdentityServiceTokensApiRequestFactory, IdentityServiceTokensApiResponseProcessor} from "../apis/IdentityServiceTokensApi";
export class PromiseIdentityServiceTokensApi {
    private api: ObservableIdentityServiceTokensApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IdentityServiceTokensApiRequestFactory,
        responseProcessor?: IdentityServiceTokensApiResponseProcessor
    ) {
        this.api = new ObservableIdentityServiceTokensApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new service token for your account.
     * Create a new service token
     * @param serviceTokenCreateRequest
     */
    public createServiceTokenWithHttpInfo(serviceTokenCreateRequest: ServiceTokenCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseServiceTokenCreate>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createServiceTokenWithHttpInfo(serviceTokenCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new service token for your account.
     * Create a new service token
     * @param serviceTokenCreateRequest
     */
    public createServiceToken(serviceTokenCreateRequest: ServiceTokenCreateRequest, _options?: PromiseConfigurationOptions): Promise<ResponseServiceTokenCreate> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createServiceToken(serviceTokenCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific service token in your account.
     * Delete a service token
     * @param tokenId
     */
    public deleteServiceTokenWithHttpInfo(tokenId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseDeleteServiceToken>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteServiceTokenWithHttpInfo(tokenId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific service token in your account.
     * Delete a service token
     * @param tokenId
     */
    public deleteServiceToken(tokenId: string, _options?: PromiseConfigurationOptions): Promise<ResponseDeleteServiceToken> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteServiceToken(tokenId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all services tokens owned by your account.
     * List of the account service tokens
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listServiceTokenWithHttpInfo(fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedServiceTokenList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listServiceTokenWithHttpInfo(fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all services tokens owned by your account.
     * List of the account service tokens
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listServiceToken(fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedServiceTokenList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listServiceToken(fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing service token without affecting other fields.
     * Partially update a service token
     * @param tokenId
     * @param [patchedServiceTokenUpdateRequest]
     */
    public partialUpdateServiceTokenWithHttpInfo(tokenId: string, patchedServiceTokenUpdateRequest?: PatchedServiceTokenUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseServiceToken>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateServiceTokenWithHttpInfo(tokenId, patchedServiceTokenUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing service token without affecting other fields.
     * Partially update a service token
     * @param tokenId
     * @param [patchedServiceTokenUpdateRequest]
     */
    public partialUpdateServiceToken(tokenId: string, patchedServiceTokenUpdateRequest?: PatchedServiceTokenUpdateRequest, _options?: PromiseConfigurationOptions): Promise<ResponseServiceToken> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateServiceToken(tokenId, patchedServiceTokenUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific service token in your account.
     * Retrieve details from a service token
     * @param tokenId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveServiceTokenWithHttpInfo(tokenId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseRetrieveServiceToken>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveServiceTokenWithHttpInfo(tokenId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific service token in your account.
     * Retrieve details from a service token
     * @param tokenId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveServiceToken(tokenId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<ResponseRetrieveServiceToken> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveServiceToken(tokenId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing service token. This replaces the entire service token with the new data provided.
     * Update a service token
     * @param tokenId
     * @param serviceTokenUpdateRequest
     */
    public updateServiceTokenWithHttpInfo(tokenId: string, serviceTokenUpdateRequest: ServiceTokenUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseServiceToken>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateServiceTokenWithHttpInfo(tokenId, serviceTokenUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing service token. This replaces the entire service token with the new data provided.
     * Update a service token
     * @param tokenId
     * @param serviceTokenUpdateRequest
     */
    public updateServiceToken(tokenId: string, serviceTokenUpdateRequest: ServiceTokenUpdateRequest, _options?: PromiseConfigurationOptions): Promise<ResponseServiceToken> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateServiceToken(tokenId, serviceTokenUpdateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableIdentityUserInfoApi } from './ObservableAPI';

import { IdentityUserInfoApiRequestFactory, IdentityUserInfoApiResponseProcessor} from "../apis/IdentityUserInfoApi";
export class PromiseIdentityUserInfoApi {
    private api: ObservableIdentityUserInfoApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IdentityUserInfoApiRequestFactory,
        responseProcessor?: IdentityUserInfoApiResponseProcessor
    ) {
        this.api = new ObservableIdentityUserInfoApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve info from a specific user in your account.
     * Retrieve user info
     * @param id
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveUserInfoWithHttpInfo(id: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseRetrieveUserInfo>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveUserInfoWithHttpInfo(id, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve info from a specific user in your account.
     * Retrieve user info
     * @param id
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveUserInfo(id: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<ResponseRetrieveUserInfo> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveUserInfo(id, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update info from an existing user. This replaces the entire user info with the new data provided.
     * Update an user info
     * @param id
     * @param [updateUserInfoRequest]
     */
    public updateUserInfoWithHttpInfo(id: number, updateUserInfoRequest?: UpdateUserInfoRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseUserInfo>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateUserInfoWithHttpInfo(id, updateUserInfoRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update info from an existing user. This replaces the entire user info with the new data provided.
     * Update an user info
     * @param id
     * @param [updateUserInfoRequest]
     */
    public updateUserInfo(id: number, updateUserInfoRequest?: UpdateUserInfoRequest, _options?: PromiseConfigurationOptions): Promise<ResponseUserInfo> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateUserInfo(id, updateUserInfoRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableIdentityUsersApi } from './ObservableAPI';

import { IdentityUsersApiRequestFactory, IdentityUsersApiResponseProcessor} from "../apis/IdentityUsersApi";
export class PromiseIdentityUsersApi {
    private api: ObservableIdentityUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IdentityUsersApiRequestFactory,
        responseProcessor?: IdentityUsersApiResponseProcessor
    ) {
        this.api = new ObservableIdentityUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new user for your account.
     * Create a new user
     * @param userRequest
     */
    public createUserWithHttpInfo(userRequest: UserRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseUser>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createUserWithHttpInfo(userRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new user for your account.
     * Create a new user
     * @param userRequest
     */
    public createUser(userRequest: UserRequest, _options?: PromiseConfigurationOptions): Promise<ResponseUser> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createUser(userRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific user in your account.
     * Delete an user
     * @param userId
     */
    public deleteUserWithHttpInfo(userId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseDeleteUser>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteUserWithHttpInfo(userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific user in your account.
     * Delete an user
     * @param userId
     */
    public deleteUser(userId: string, _options?: PromiseConfigurationOptions): Promise<ResponseDeleteUser> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteUser(userId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all users owned by your account.
     * List of the account users
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [locked] Filters users by locked status.  - &#x60;true&#x60;: Returns only locked users.  - &#x60;false&#x60;: Returns only unlocked users.  - (not provided): Returns all users.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listUsersWithHttpInfo(fields?: string, locked?: boolean, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedUserList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listUsersWithHttpInfo(fields, locked, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all users owned by your account.
     * List of the account users
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [locked] Filters users by locked status.  - &#x60;true&#x60;: Returns only locked users.  - &#x60;false&#x60;: Returns only unlocked users.  - (not provided): Returns all users.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listUsers(fields?: string, locked?: boolean, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedUserList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listUsers(fields, locked, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing user without affecting other fields.
     * Partially update an user
     * @param userId
     * @param [patchedUserRequest]
     */
    public partialUpdateUserWithHttpInfo(userId: string, patchedUserRequest?: PatchedUserRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseUser>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateUserWithHttpInfo(userId, patchedUserRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing user without affecting other fields.
     * Partially update an user
     * @param userId
     * @param [patchedUserRequest]
     */
    public partialUpdateUser(userId: string, patchedUserRequest?: PatchedUserRequest, _options?: PromiseConfigurationOptions): Promise<ResponseUser> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateUser(userId, patchedUserRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific user in your account.
     * Retrieve details from an user
     * @param userId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveUserWithHttpInfo(userId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseRetrieveUser>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveUserWithHttpInfo(userId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific user in your account.
     * Retrieve details from an user
     * @param userId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveUser(userId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<ResponseRetrieveUser> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveUser(userId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing user. This replaces the entire user with the new data provided.
     * Update an user
     * @param userId
     * @param userRequest
     */
    public updateUserWithHttpInfo(userId: string, userRequest: UserRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseUser>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateUserWithHttpInfo(userId, userRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing user. This replaces the entire user with the new data provided.
     * Update an user
     * @param userId
     * @param userRequest
     */
    public updateUser(userId: string, userRequest: UserRequest, _options?: PromiseConfigurationOptions): Promise<ResponseUser> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateUser(userId, userRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableKVNamespacesApi } from './ObservableAPI';

import { KVNamespacesApiRequestFactory, KVNamespacesApiResponseProcessor} from "../apis/KVNamespacesApi";
export class PromiseKVNamespacesApi {
    private api: ObservableKVNamespacesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: KVNamespacesApiRequestFactory,
        responseProcessor?: KVNamespacesApiResponseProcessor
    ) {
        this.api = new ObservableKVNamespacesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new namespace in the authenticated account.
     * Create namespace
     * @param namespaceCreateRequest
     */
    public createNamespaceWithHttpInfo(namespaceCreateRequest: NamespaceCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Namespace>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNamespaceWithHttpInfo(namespaceCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new namespace in the authenticated account.
     * Create namespace
     * @param namespaceCreateRequest
     */
    public createNamespace(namespaceCreateRequest: NamespaceCreateRequest, _options?: PromiseConfigurationOptions): Promise<Namespace> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNamespace(namespaceCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a paginated list of namespaces for the authenticated account.
     * List namespaces
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     */
    public listNamespacesWithHttpInfo(fields?: string, page?: number, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<NamespaceList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNamespacesWithHttpInfo(fields, page, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a paginated list of namespaces for the authenticated account.
     * List namespaces
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     */
    public listNamespaces(fields?: string, page?: number, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<NamespaceList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNamespaces(fields, page, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a specific namespace by name, if it belongs to the authenticated account.
     * Retrieve namespace
     * @param namespace The unique identifier (name) of the namespace
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveNamespaceWithHttpInfo(namespace: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Namespace>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveNamespaceWithHttpInfo(namespace, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a specific namespace by name, if it belongs to the authenticated account.
     * Retrieve namespace
     * @param namespace The unique identifier (name) of the namespace
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveNamespace(namespace: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<Namespace> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveNamespace(namespace, fields, observableOptions);
        return result.toPromise();
    }


}



import { ObservableMetricsDashboardApi } from './ObservableAPI';

import { MetricsDashboardApiRequestFactory, MetricsDashboardApiResponseProcessor} from "../apis/MetricsDashboardApi";
export class PromiseMetricsDashboardApi {
    private api: ObservableMetricsDashboardApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MetricsDashboardApiRequestFactory,
        responseProcessor?: MetricsDashboardApiResponseProcessor
    ) {
        this.api = new ObservableMetricsDashboardApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new dashboard in a given scope.
     * Create a new dashboard
     * @param folderId The unique identifier of the folder
     * @param dashboardRequest
     */
    public createDashboardWithHttpInfo(folderId: number, dashboardRequest: DashboardRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DashboardResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDashboardWithHttpInfo(folderId, dashboardRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new dashboard in a given scope.
     * Create a new dashboard
     * @param folderId The unique identifier of the folder
     * @param dashboardRequest
     */
    public createDashboard(folderId: number, dashboardRequest: DashboardRequest, _options?: PromiseConfigurationOptions): Promise<DashboardResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDashboard(folderId, dashboardRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific dashboard.
     * Delete a dashboard
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     */
    public deleteDashboardWithHttpInfo(dashboardId: number, folderId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDashboardWithHttpInfo(dashboardId, folderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific dashboard.
     * Delete a dashboard
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     */
    public deleteDashboard(dashboardId: number, folderId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDashboard(dashboardId, folderId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all dashboards for your user.
     * List of the dashboards
     * @param folderId The unique identifier of the folder
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listDashboardsWithHttpInfo(folderId: number, fields?: string, id?: number, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedDashboardListResponseList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDashboardsWithHttpInfo(folderId, fields, id, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all dashboards for your user.
     * List of the dashboards
     * @param folderId The unique identifier of the folder
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listDashboards(folderId: number, fields?: string, id?: number, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedDashboardListResponseList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDashboards(folderId, fields, id, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing dashboard without affecting other fields.
     * Partially update a dashboard
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param [patchedDashboardRequest]
     */
    public partialUpdateDashboardWithHttpInfo(dashboardId: number, folderId: number, patchedDashboardRequest?: PatchedDashboardRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DashboardResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateDashboardWithHttpInfo(dashboardId, folderId, patchedDashboardRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing dashboard without affecting other fields.
     * Partially update a dashboard
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param [patchedDashboardRequest]
     */
    public partialUpdateDashboard(dashboardId: number, folderId: number, patchedDashboardRequest?: PatchedDashboardRequest, _options?: PromiseConfigurationOptions): Promise<DashboardResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateDashboard(dashboardId, folderId, patchedDashboardRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific dashboard.
     * Retrieve details from a dashboard
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveDashboardWithHttpInfo(dashboardId: number, folderId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DashboardResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveDashboardWithHttpInfo(dashboardId, folderId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific dashboard.
     * Retrieve details from a dashboard
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveDashboard(dashboardId: number, folderId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<DashboardResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveDashboard(dashboardId, folderId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing dashboard. This replaces the entire dashboard with the new data provided.
     * Update a dashboard
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param dashboardRequest
     */
    public updateDashboardWithHttpInfo(dashboardId: number, folderId: number, dashboardRequest: DashboardRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DashboardResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDashboardWithHttpInfo(dashboardId, folderId, dashboardRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing dashboard. This replaces the entire dashboard with the new data provided.
     * Update a dashboard
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param dashboardRequest
     */
    public updateDashboard(dashboardId: number, folderId: number, dashboardRequest: DashboardRequest, _options?: PromiseConfigurationOptions): Promise<DashboardResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDashboard(dashboardId, folderId, dashboardRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableMetricsFoldersApi } from './ObservableAPI';

import { MetricsFoldersApiRequestFactory, MetricsFoldersApiResponseProcessor} from "../apis/MetricsFoldersApi";
export class PromiseMetricsFoldersApi {
    private api: ObservableMetricsFoldersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MetricsFoldersApiRequestFactory,
        responseProcessor?: MetricsFoldersApiResponseProcessor
    ) {
        this.api = new ObservableMetricsFoldersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new folder in a given scope.
     * Create a new folder
     * @param folderRequest
     */
    public createFolderWithHttpInfo(folderRequest: FolderRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FolderResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFolderWithHttpInfo(folderRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new folder in a given scope.
     * Create a new folder
     * @param folderRequest
     */
    public createFolder(folderRequest: FolderRequest, _options?: PromiseConfigurationOptions): Promise<FolderResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFolder(folderRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific folder.
     * Delete a folder
     * @param folderId The unique identifier of the folder
     */
    public deleteFolderWithHttpInfo(folderId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFolderWithHttpInfo(folderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific folder.
     * Delete a folder
     * @param folderId The unique identifier of the folder
     */
    public deleteFolder(folderId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFolder(folderId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all folders for your user.
     * List of the folders
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listFoldersWithHttpInfo(fields?: string, id?: number, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedFolderListResponseList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFoldersWithHttpInfo(fields, id, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all folders for your user.
     * List of the folders
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listFolders(fields?: string, id?: number, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedFolderListResponseList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFolders(fields, id, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing folder without affecting other fields.
     * Partially update a folder
     * @param folderId The unique identifier of the folder
     * @param [patchedFolderRequest]
     */
    public partialUpdateFolderWithHttpInfo(folderId: number, patchedFolderRequest?: PatchedFolderRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FolderResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateFolderWithHttpInfo(folderId, patchedFolderRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing folder without affecting other fields.
     * Partially update a folder
     * @param folderId The unique identifier of the folder
     * @param [patchedFolderRequest]
     */
    public partialUpdateFolder(folderId: number, patchedFolderRequest?: PatchedFolderRequest, _options?: PromiseConfigurationOptions): Promise<FolderResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateFolder(folderId, patchedFolderRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific folder.
     * Retrieve details from a folder
     * @param folderId The unique identifier of the folder
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveFolderWithHttpInfo(folderId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FolderResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveFolderWithHttpInfo(folderId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific folder.
     * Retrieve details from a folder
     * @param folderId The unique identifier of the folder
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveFolder(folderId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<FolderResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveFolder(folderId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing folder. This replaces the entire folder with the new data provided.
     * Update a folder
     * @param folderId The unique identifier of the folder
     * @param folderRequest
     */
    public updateFolderWithHttpInfo(folderId: number, folderRequest: FolderRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FolderResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFolderWithHttpInfo(folderId, folderRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing folder. This replaces the entire folder with the new data provided.
     * Update a folder
     * @param folderId The unique identifier of the folder
     * @param folderRequest
     */
    public updateFolder(folderId: number, folderRequest: FolderRequest, _options?: PromiseConfigurationOptions): Promise<FolderResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFolder(folderId, folderRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableMetricsLibraryReportsApi } from './ObservableAPI';

import { MetricsLibraryReportsApiRequestFactory, MetricsLibraryReportsApiResponseProcessor} from "../apis/MetricsLibraryReportsApi";
export class PromiseMetricsLibraryReportsApi {
    private api: ObservableMetricsLibraryReportsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MetricsLibraryReportsApiRequestFactory,
        responseProcessor?: MetricsLibraryReportsApiResponseProcessor
    ) {
        this.api = new ObservableMetricsLibraryReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new library report in a given scope.
     * Create a new library report
     * @param libraryReportRequest
     */
    public createLibraryReportWithHttpInfo(libraryReportRequest: LibraryReportRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ReportResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createLibraryReportWithHttpInfo(libraryReportRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new library report in a given scope.
     * Create a new library report
     * @param libraryReportRequest
     */
    public createLibraryReport(libraryReportRequest: LibraryReportRequest, _options?: PromiseConfigurationOptions): Promise<ReportResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createLibraryReport(libraryReportRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific library report.
     * Delete a library report
     * @param libraryReportId The unique identifier of the library report
     */
    public deleteLibraryReportWithHttpInfo(libraryReportId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteLibraryReportWithHttpInfo(libraryReportId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific library report.
     * Delete a library report
     * @param libraryReportId The unique identifier of the library report
     */
    public deleteLibraryReport(libraryReportId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteLibraryReport(libraryReportId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all library reports for your user.
     * List of library reports
     * @param [aggregationType] Filter by aggregation type (accepts comma-separated values).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     * @param [type] Filter by type (accepts comma-separated values).
     */
    public listLibraryReportsWithHttpInfo(aggregationType?: string, fields?: string, id?: number, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, type?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedReportListResponseList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listLibraryReportsWithHttpInfo(aggregationType, fields, id, name, ordering, page, pageSize, search, type, observableOptions);
        return result.toPromise();
    }

    /**
     * List all library reports for your user.
     * List of library reports
     * @param [aggregationType] Filter by aggregation type (accepts comma-separated values).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     * @param [type] Filter by type (accepts comma-separated values).
     */
    public listLibraryReports(aggregationType?: string, fields?: string, id?: number, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, type?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedReportListResponseList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listLibraryReports(aggregationType, fields, id, name, ordering, page, pageSize, search, type, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific library report.
     * Retrieve details from a library report
     * @param libraryReportId The unique identifier of the library report
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveLibraryReportWithHttpInfo(libraryReportId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ReportResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveLibraryReportWithHttpInfo(libraryReportId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific library report.
     * Retrieve details from a library report
     * @param libraryReportId The unique identifier of the library report
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveLibraryReport(libraryReportId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<ReportResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveLibraryReport(libraryReportId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing library report. This replaces the entire report with the new data provided.
     * Update a library report
     * @param libraryReportId The unique identifier of the library report
     * @param libraryReportRequest
     */
    public updateLibraryReportWithHttpInfo(libraryReportId: number, libraryReportRequest: LibraryReportRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ReportResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLibraryReportWithHttpInfo(libraryReportId, libraryReportRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing library report. This replaces the entire report with the new data provided.
     * Update a library report
     * @param libraryReportId The unique identifier of the library report
     * @param libraryReportRequest
     */
    public updateLibraryReport(libraryReportId: number, libraryReportRequest: LibraryReportRequest, _options?: PromiseConfigurationOptions): Promise<ReportResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLibraryReport(libraryReportId, libraryReportRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableMetricsRecommendationsApi } from './ObservableAPI';

import { MetricsRecommendationsApiRequestFactory, MetricsRecommendationsApiResponseProcessor} from "../apis/MetricsRecommendationsApi";
export class PromiseMetricsRecommendationsApi {
    private api: ObservableMetricsRecommendationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MetricsRecommendationsApiRequestFactory,
        responseProcessor?: MetricsRecommendationsApiResponseProcessor
    ) {
        this.api = new ObservableMetricsRecommendationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new recommendation.
     * Create a new recommendation
     * @param recommendationRequest
     */
    public createRecommendationWithHttpInfo(recommendationRequest: RecommendationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FolderResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createRecommendationWithHttpInfo(recommendationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new recommendation.
     * Create a new recommendation
     * @param recommendationRequest
     */
    public createRecommendation(recommendationRequest: RecommendationRequest, _options?: PromiseConfigurationOptions): Promise<FolderResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createRecommendation(recommendationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific recommendation.
     * Delete a recommendation
     * @param recommendationId The unique identifier of the recommendation
     */
    public deleteRecommendationWithHttpInfo(recommendationId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteRecommendationWithHttpInfo(recommendationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific recommendation.
     * Delete a recommendation
     * @param recommendationId The unique identifier of the recommendation
     */
    public deleteRecommendation(recommendationId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteRecommendation(recommendationId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all recommendations for your user.
     * List of the recommendations
     * @param [dashboard] Filter by dashboard ID (accepts comma-separated values).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by recommendation ID (accepts comma-separated values).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listRecommendationsWithHttpInfo(dashboard?: string, fields?: string, id?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedFolderListResponseList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listRecommendationsWithHttpInfo(dashboard, fields, id, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all recommendations for your user.
     * List of the recommendations
     * @param [dashboard] Filter by dashboard ID (accepts comma-separated values).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by recommendation ID (accepts comma-separated values).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listRecommendations(dashboard?: string, fields?: string, id?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedFolderListResponseList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listRecommendations(dashboard, fields, id, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }


}



import { ObservableMetricsReportsApi } from './ObservableAPI';

import { MetricsReportsApiRequestFactory, MetricsReportsApiResponseProcessor} from "../apis/MetricsReportsApi";
export class PromiseMetricsReportsApi {
    private api: ObservableMetricsReportsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MetricsReportsApiRequestFactory,
        responseProcessor?: MetricsReportsApiResponseProcessor
    ) {
        this.api = new ObservableMetricsReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new report in a given scope.
     * Create a new report
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param rowId The unique identifier of the row
     * @param reportRequest
     */
    public createReportWithHttpInfo(dashboardId: number, folderId: number, rowId: number, reportRequest: ReportRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ReportResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createReportWithHttpInfo(dashboardId, folderId, rowId, reportRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new report in a given scope.
     * Create a new report
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param rowId The unique identifier of the row
     * @param reportRequest
     */
    public createReport(dashboardId: number, folderId: number, rowId: number, reportRequest: ReportRequest, _options?: PromiseConfigurationOptions): Promise<ReportResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createReport(dashboardId, folderId, rowId, reportRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific report.
     * Delete a report
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param reportId The unique identifier of the report
     * @param rowId The unique identifier of the row
     */
    public deleteReportWithHttpInfo(dashboardId: number, folderId: number, reportId: number, rowId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteReportWithHttpInfo(dashboardId, folderId, reportId, rowId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific report.
     * Delete a report
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param reportId The unique identifier of the report
     * @param rowId The unique identifier of the row
     */
    public deleteReport(dashboardId: number, folderId: number, reportId: number, rowId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteReport(dashboardId, folderId, reportId, rowId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all reports for your user.
     * List of reports
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param rowId The unique identifier of the row
     * @param [aggregationType] Filter by aggregation type (accepts comma-separated values).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     * @param [type] Filter by type (accepts comma-separated values).
     */
    public listReportsWithHttpInfo(dashboardId: number, folderId: number, rowId: number, aggregationType?: string, fields?: string, id?: number, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, type?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedReportListResponseList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listReportsWithHttpInfo(dashboardId, folderId, rowId, aggregationType, fields, id, name, ordering, page, pageSize, search, type, observableOptions);
        return result.toPromise();
    }

    /**
     * List all reports for your user.
     * List of reports
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param rowId The unique identifier of the row
     * @param [aggregationType] Filter by aggregation type (accepts comma-separated values).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     * @param [type] Filter by type (accepts comma-separated values).
     */
    public listReports(dashboardId: number, folderId: number, rowId: number, aggregationType?: string, fields?: string, id?: number, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, type?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedReportListResponseList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listReports(dashboardId, folderId, rowId, aggregationType, fields, id, name, ordering, page, pageSize, search, type, observableOptions);
        return result.toPromise();
    }

    /**
     * Reorder all reports for a specific Row.
     * Ordering reports in row
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param rowId The unique identifier of the row
     * @param orderRequest
     */
    public orderingReportWithHttpInfo(dashboardId: number, folderId: number, rowId: number, orderRequest: OrderRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrderResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.orderingReportWithHttpInfo(dashboardId, folderId, rowId, orderRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Reorder all reports for a specific Row.
     * Ordering reports in row
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param rowId The unique identifier of the row
     * @param orderRequest
     */
    public orderingReport(dashboardId: number, folderId: number, rowId: number, orderRequest: OrderRequest, _options?: PromiseConfigurationOptions): Promise<OrderResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.orderingReport(dashboardId, folderId, rowId, orderRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific report.
     * Retrieve details from a report
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param reportId The unique identifier of the report
     * @param rowId The unique identifier of the row
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveReportWithHttpInfo(dashboardId: number, folderId: number, reportId: number, rowId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ReportResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveReportWithHttpInfo(dashboardId, folderId, reportId, rowId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific report.
     * Retrieve details from a report
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param reportId The unique identifier of the report
     * @param rowId The unique identifier of the row
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveReport(dashboardId: number, folderId: number, reportId: number, rowId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<ReportResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveReport(dashboardId, folderId, reportId, rowId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing report. This replaces the entire report with the new data provided.
     * Update a report
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param reportId The unique identifier of the report
     * @param rowId The unique identifier of the row
     * @param reportRequest
     */
    public updateReportWithHttpInfo(dashboardId: number, folderId: number, reportId: number, rowId: number, reportRequest: ReportRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ReportResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateReportWithHttpInfo(dashboardId, folderId, reportId, rowId, reportRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing report. This replaces the entire report with the new data provided.
     * Update a report
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param reportId The unique identifier of the report
     * @param rowId The unique identifier of the row
     * @param reportRequest
     */
    public updateReport(dashboardId: number, folderId: number, reportId: number, rowId: number, reportRequest: ReportRequest, _options?: PromiseConfigurationOptions): Promise<ReportResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateReport(dashboardId, folderId, reportId, rowId, reportRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableMetricsRowsApi } from './ObservableAPI';

import { MetricsRowsApiRequestFactory, MetricsRowsApiResponseProcessor} from "../apis/MetricsRowsApi";
export class PromiseMetricsRowsApi {
    private api: ObservableMetricsRowsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MetricsRowsApiRequestFactory,
        responseProcessor?: MetricsRowsApiResponseProcessor
    ) {
        this.api = new ObservableMetricsRowsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new row in dashboard.
     * Create a new row
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param rowRequest
     */
    public createRowWithHttpInfo(dashboardId: number, folderId: number, rowRequest: RowRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RowResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createRowWithHttpInfo(dashboardId, folderId, rowRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new row in dashboard.
     * Create a new row
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param rowRequest
     */
    public createRow(dashboardId: number, folderId: number, rowRequest: RowRequest, _options?: PromiseConfigurationOptions): Promise<RowResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createRow(dashboardId, folderId, rowRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific row.
     * Delete a row
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param rowId The unique identifier of the row
     */
    public deleteRowWithHttpInfo(dashboardId: number, folderId: number, rowId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteRowWithHttpInfo(dashboardId, folderId, rowId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific row.
     * Delete a row
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param rowId The unique identifier of the row
     */
    public deleteRow(dashboardId: number, folderId: number, rowId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteRow(dashboardId, folderId, rowId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all rows in dashboards.
     * List of the rows
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     * @param [title] Filter by title (case-insensitive, partial match).
     */
    public listRowsWithHttpInfo(dashboardId: number, folderId: number, fields?: string, id?: number, ordering?: string, page?: number, pageSize?: number, search?: string, title?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedRowListResponseList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listRowsWithHttpInfo(dashboardId, folderId, fields, id, ordering, page, pageSize, search, title, observableOptions);
        return result.toPromise();
    }

    /**
     * List all rows in dashboards.
     * List of the rows
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     * @param [title] Filter by title (case-insensitive, partial match).
     */
    public listRows(dashboardId: number, folderId: number, fields?: string, id?: number, ordering?: string, page?: number, pageSize?: number, search?: string, title?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedRowListResponseList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listRows(dashboardId, folderId, fields, id, ordering, page, pageSize, search, title, observableOptions);
        return result.toPromise();
    }

    /**
     * Reorder all rows for a specific Dahsboard.
     * Ordering rows in dashboard
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param orderRequest
     */
    public orderingRowWithHttpInfo(dashboardId: number, folderId: number, orderRequest: OrderRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrderResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.orderingRowWithHttpInfo(dashboardId, folderId, orderRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Reorder all rows for a specific Dahsboard.
     * Ordering rows in dashboard
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param orderRequest
     */
    public orderingRow(dashboardId: number, folderId: number, orderRequest: OrderRequest, _options?: PromiseConfigurationOptions): Promise<OrderResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.orderingRow(dashboardId, folderId, orderRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific row.
     * Retrieve details from a row
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param rowId The unique identifier of the row
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveRowWithHttpInfo(dashboardId: number, folderId: number, rowId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RowResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveRowWithHttpInfo(dashboardId, folderId, rowId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific row.
     * Retrieve details from a row
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param rowId The unique identifier of the row
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveRow(dashboardId: number, folderId: number, rowId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<RowResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveRow(dashboardId, folderId, rowId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing row. 
     * Update a row
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param rowId The unique identifier of the row
     * @param rowRequest
     */
    public updateRowWithHttpInfo(dashboardId: number, folderId: number, rowId: number, rowRequest: RowRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RowResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateRowWithHttpInfo(dashboardId, folderId, rowId, rowRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing row. 
     * Update a row
     * @param dashboardId The unique identifier of the dashboard
     * @param folderId The unique identifier of the folder
     * @param rowId The unique identifier of the row
     * @param rowRequest
     */
    public updateRow(dashboardId: number, folderId: number, rowId: number, rowRequest: RowRequest, _options?: PromiseConfigurationOptions): Promise<RowResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateRow(dashboardId, folderId, rowId, rowRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableNetworkListVersionsApi } from './ObservableAPI';

import { NetworkListVersionsApiRequestFactory, NetworkListVersionsApiResponseProcessor} from "../apis/NetworkListVersionsApi";
export class PromiseNetworkListVersionsApi {
    private api: ObservableNetworkListVersionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NetworkListVersionsApiRequestFactory,
        responseProcessor?: NetworkListVersionsApiResponseProcessor
    ) {
        this.api = new ObservableNetworkListVersionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a ready version.
     * Archive a Network List version
     * @param networkListId The ID of the Network List resource.
     * @param versionId The identifier of the version.
     * @param [versionArchiveRequest]
     */
    public archiveNetworkListVersionWithHttpInfo(networkListId: number, versionId: string, versionArchiveRequest?: VersionArchiveRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.archiveNetworkListVersionWithHttpInfo(networkListId, versionId, versionArchiveRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Archive a ready version.
     * Archive a Network List version
     * @param networkListId The ID of the Network List resource.
     * @param versionId The identifier of the version.
     * @param [versionArchiveRequest]
     */
    public archiveNetworkListVersion(networkListId: number, versionId: string, versionArchiveRequest?: VersionArchiveRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.archiveNetworkListVersion(networkListId, versionId, versionArchiveRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build a Network List version
     * @param networkListId The ID of the Network List resource.
     * @param versionId The identifier of the version.
     * @param [versionBuildRequest]
     */
    public buildNetworkListVersionWithHttpInfo(networkListId: number, versionId: string, versionBuildRequest?: VersionBuildRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.buildNetworkListVersionWithHttpInfo(networkListId, versionId, versionBuildRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build a Network List version
     * @param networkListId The ID of the Network List resource.
     * @param versionId The identifier of the version.
     * @param [versionBuildRequest]
     */
    public buildNetworkListVersion(networkListId: number, versionId: string, versionBuildRequest?: VersionBuildRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.buildNetworkListVersion(networkListId, versionId, versionBuildRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel a Network List version build
     * @param networkListId The ID of the Network List resource.
     * @param versionId The identifier of the version.
     * @param [versionCancelRequest]
     */
    public cancelNetworkListVersionBuildWithHttpInfo(networkListId: number, versionId: string, versionCancelRequest?: VersionCancelRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cancelNetworkListVersionBuildWithHttpInfo(networkListId, versionId, versionCancelRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel a Network List version build
     * @param networkListId The ID of the Network List resource.
     * @param versionId The identifier of the version.
     * @param [versionCancelRequest]
     */
    public cancelNetworkListVersionBuild(networkListId: number, versionId: string, versionCancelRequest?: VersionCancelRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cancelNetworkListVersionBuild(networkListId, versionId, versionCancelRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new version by cloning.
     * Create a new Network List version
     * @param networkListId The ID of the Network List resource.
     * @param [versionCreateRequest]
     */
    public createNetworkListVersionWithHttpInfo(networkListId: number, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNetworkListVersionWithHttpInfo(networkListId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new version by cloning.
     * Create a new Network List version
     * @param networkListId The ID of the Network List resource.
     * @param [versionCreateRequest]
     */
    public createNetworkListVersion(networkListId: number, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNetworkListVersion(networkListId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific version.
     * Delete a Network List version
     * @param networkListId The ID of the Network List resource.
     * @param versionId The identifier of the version.
     */
    public deleteNetworkListVersionWithHttpInfo(networkListId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteNetworkListVersionWithHttpInfo(networkListId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific version.
     * Delete a Network List version
     * @param networkListId The ID of the Network List resource.
     * @param versionId The identifier of the version.
     */
    public deleteNetworkListVersion(networkListId: number, versionId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteNetworkListVersion(networkListId, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all versions of a specific Network List.
     * List Network List versions
     * @param networkListId The ID of the Network List resource.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public listNetworkListVersionsWithHttpInfo(networkListId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNetworkListVersionsWithHttpInfo(networkListId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * List all versions of a specific Network List.
     * List Network List versions
     * @param networkListId The ID of the Network List resource.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public listNetworkListVersions(networkListId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNetworkListVersions(networkListId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially update a draft version.
     * Partially update a Network List version
     * @param networkListId The ID of the Network List resource.
     * @param versionId The identifier of the version.
     * @param [patchedVersionCreateRequest]
     */
    public partialUpdateNetworkListVersionWithHttpInfo(networkListId: number, versionId: string, patchedVersionCreateRequest?: PatchedVersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateNetworkListVersionWithHttpInfo(networkListId, versionId, patchedVersionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially update a draft version.
     * Partially update a Network List version
     * @param networkListId The ID of the Network List resource.
     * @param versionId The identifier of the version.
     * @param [patchedVersionCreateRequest]
     */
    public partialUpdateNetworkListVersion(networkListId: number, versionId: string, patchedVersionCreateRequest?: PatchedVersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateNetworkListVersion(networkListId, versionId, patchedVersionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific version.
     * Retrieve a Network List version
     * @param networkListId The ID of the Network List resource.
     * @param versionId The identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveNetworkListVersionWithHttpInfo(networkListId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveNetworkListVersionWithHttpInfo(networkListId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific version.
     * Retrieve a Network List version
     * @param networkListId The ID of the Network List resource.
     * @param versionId The identifier of the version.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveNetworkListVersion(networkListId: number, versionId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveNetworkListVersion(networkListId, versionId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a draft version.
     * Update a Network List version
     * @param networkListId The ID of the Network List resource.
     * @param versionId The identifier of the version.
     * @param [versionCreateRequest]
     */
    public updateNetworkListVersionWithHttpInfo(networkListId: number, versionId: string, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateNetworkListVersionWithHttpInfo(networkListId, versionId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a draft version.
     * Update a Network List version
     * @param networkListId The ID of the Network List resource.
     * @param versionId The identifier of the version.
     * @param [versionCreateRequest]
     */
    public updateNetworkListVersion(networkListId: number, versionId: string, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateNetworkListVersion(networkListId, versionId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableNetworkListsApi } from './ObservableAPI';

import { NetworkListsApiRequestFactory, NetworkListsApiResponseProcessor} from "../apis/NetworkListsApi";
export class PromiseNetworkListsApi {
    private api: ObservableNetworkListsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NetworkListsApiRequestFactory,
        responseProcessor?: NetworkListsApiResponseProcessor
    ) {
        this.api = new ObservableNetworkListsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Network List in your account.
     * Create a Network List
     * @param networkListRequest
     */
    public createNetworkListWithHttpInfo(networkListRequest: NetworkListRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<NetworkListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNetworkListWithHttpInfo(networkListRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Network List in your account.
     * Create a Network List
     * @param networkListRequest
     */
    public createNetworkList(networkListRequest: NetworkListRequest, _options?: PromiseConfigurationOptions): Promise<NetworkListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNetworkList(networkListRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Network List in your account.
     * Delete a Network List
     * @param networkListId A unique integer value identifying the network list.
     */
    public deleteNetworkListWithHttpInfo(networkListId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteNetworkListWithHttpInfo(networkListId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Network List in your account.
     * Delete a Network List
     * @param networkListId A unique integer value identifying the network list.
     */
    public deleteNetworkList(networkListId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteNetworkList(networkListId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Network Lists owned by your account.
     * List Network Lists
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [listTypeIn] Filter by list type (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listNetworkListsWithHttpInfo(fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, listTypeIn?: string, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedNetworkListSummaryList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNetworkListsWithHttpInfo(fields, id, lastEditor, lastModifiedGte, lastModifiedLte, listTypeIn, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Network Lists owned by your account.
     * List Network Lists
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [listTypeIn] Filter by list type (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listNetworkLists(fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, listTypeIn?: string, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedNetworkListSummaryList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNetworkLists(fields, id, lastEditor, lastModifiedGte, lastModifiedLte, listTypeIn, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Network List without affecting other fields.
     * Partially update a Network List
     * @param networkListId A unique integer value identifying the network list.
     * @param [patchedNetworkListRequest]
     */
    public partialUpdateNetworkListWithHttpInfo(networkListId: number, patchedNetworkListRequest?: PatchedNetworkListRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<NetworkListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateNetworkListWithHttpInfo(networkListId, patchedNetworkListRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Network List without affecting other fields.
     * Partially update a Network List
     * @param networkListId A unique integer value identifying the network list.
     * @param [patchedNetworkListRequest]
     */
    public partialUpdateNetworkList(networkListId: number, patchedNetworkListRequest?: PatchedNetworkListRequest, _options?: PromiseConfigurationOptions): Promise<NetworkListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateNetworkList(networkListId, patchedNetworkListRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Network List in your account.
     * Retrieve details of a Network List
     * @param networkListId A unique integer value identifying the network list.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ipv4] Filter by IPv4. Only applicable for network lists of type \&#39;ip_cidr\&#39;.
     * @param [ipv6] Filter by IPv6. Only applicable for network lists of type \&#39;ip_cidr\&#39;.
     */
    public retrieveNetworkListWithHttpInfo(networkListId: number, fields?: string, ipv4?: boolean, ipv6?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<NetworkListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveNetworkListWithHttpInfo(networkListId, fields, ipv4, ipv6, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Network List in your account.
     * Retrieve details of a Network List
     * @param networkListId A unique integer value identifying the network list.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ipv4] Filter by IPv4. Only applicable for network lists of type \&#39;ip_cidr\&#39;.
     * @param [ipv6] Filter by IPv6. Only applicable for network lists of type \&#39;ip_cidr\&#39;.
     */
    public retrieveNetworkList(networkListId: number, fields?: string, ipv4?: boolean, ipv6?: boolean, _options?: PromiseConfigurationOptions): Promise<NetworkListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveNetworkList(networkListId, fields, ipv4, ipv6, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Network List. This replaces the entire Network List with the new data provided.
     * Update a Network List
     * @param networkListId A unique integer value identifying the network list.
     * @param networkListRequest
     */
    public updateNetworkListWithHttpInfo(networkListId: number, networkListRequest: NetworkListRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<NetworkListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateNetworkListWithHttpInfo(networkListId, networkListRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Network List. This replaces the entire Network List with the new data provided.
     * Update a Network List
     * @param networkListId A unique integer value identifying the network list.
     * @param networkListRequest
     */
    public updateNetworkList(networkListId: number, networkListRequest: NetworkListRequest, _options?: PromiseConfigurationOptions): Promise<NetworkListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateNetworkList(networkListId, networkListRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOrchestratorNodeGroupsApi } from './ObservableAPI';

import { OrchestratorNodeGroupsApiRequestFactory, OrchestratorNodeGroupsApiResponseProcessor} from "../apis/OrchestratorNodeGroupsApi";
export class PromiseOrchestratorNodeGroupsApi {
    private api: ObservableOrchestratorNodeGroupsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrchestratorNodeGroupsApiRequestFactory,
        responseProcessor?: OrchestratorNodeGroupsApiResponseProcessor
    ) {
        this.api = new ObservableOrchestratorNodeGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a bind between Node and Group.
     * Bind Node Group
     * @param nodeId
     * @param [nodeGroupsByIdRequest]
     */
    public bindNodeGroupWithHttpInfo(nodeId: number, nodeGroupsByIdRequest?: NodeGroupsByIdRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAsyncNodeGroupsById>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bindNodeGroupWithHttpInfo(nodeId, nodeGroupsByIdRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a bind between Node and Group.
     * Bind Node Group
     * @param nodeId
     * @param [nodeGroupsByIdRequest]
     */
    public bindNodeGroup(nodeId: number, nodeGroupsByIdRequest?: NodeGroupsByIdRequest, _options?: PromiseConfigurationOptions): Promise<ResponseAsyncNodeGroupsById> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bindNodeGroup(nodeId, nodeGroupsByIdRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create an Node Group.
     * Create Node Group
     * @param nodeGroupsRequest
     */
    public createNodeGroupWithHttpInfo(nodeGroupsRequest: NodeGroupsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<NodeGroups>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNodeGroupWithHttpInfo(nodeGroupsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create an Node Group.
     * Create Node Group
     * @param nodeGroupsRequest
     */
    public createNodeGroup(nodeGroupsRequest: NodeGroupsRequest, _options?: PromiseConfigurationOptions): Promise<NodeGroups> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNodeGroup(nodeGroupsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Groups of an Node.
     * List Node Groups
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listNodeGroupsWithHttpInfo(fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedNodeGroupsList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNodeGroupsWithHttpInfo(fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Groups of an Node.
     * List Node Groups
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listNodeGroups(fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedNodeGroupsList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNodeGroups(fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Groups of an Node.
     * List Node Groups by id
     * @param nodeId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listNodeGroupsByIDWithHttpInfo(nodeId: number, fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedNodeGroupsByIdList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNodeGroupsByIDWithHttpInfo(nodeId, fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Groups of an Node.
     * List Node Groups by id
     * @param nodeId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listNodeGroupsByID(nodeId: number, fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedNodeGroupsByIdList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNodeGroupsByID(nodeId, fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove an Node Group.
     * Remove Node Group
     * @param groupId
     */
    public removeNodeGroupWithHttpInfo(groupId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeNodeGroupWithHttpInfo(groupId, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove an Node Group.
     * Remove Node Group
     * @param groupId
     */
    public removeNodeGroup(groupId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeNodeGroup(groupId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOrchestratorNodeServicesApi } from './ObservableAPI';

import { OrchestratorNodeServicesApiRequestFactory, OrchestratorNodeServicesApiResponseProcessor} from "../apis/OrchestratorNodeServicesApi";
export class PromiseOrchestratorNodeServicesApi {
    private api: ObservableOrchestratorNodeServicesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrchestratorNodeServicesApiRequestFactory,
        responseProcessor?: OrchestratorNodeServicesApiResponseProcessor
    ) {
        this.api = new ObservableOrchestratorNodeServicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a bind between Node and Service.
     * Bind Node Service
     * @param nodeId
     * @param nodeServicesRequest
     */
    public bindNodeServicesWithHttpInfo(nodeId: number, nodeServicesRequest: NodeServicesRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAsyncNodeServices>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bindNodeServicesWithHttpInfo(nodeId, nodeServicesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a bind between Node and Service.
     * Bind Node Service
     * @param nodeId
     * @param nodeServicesRequest
     */
    public bindNodeServices(nodeId: number, nodeServicesRequest: NodeServicesRequest, _options?: PromiseConfigurationOptions): Promise<ResponseAsyncNodeServices> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bindNodeServices(nodeId, nodeServicesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Services from an Node.
     * List Node Services
     * @param nodeId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listNodeServicesWithHttpInfo(nodeId: number, fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedNodeServicesList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNodeServicesWithHttpInfo(nodeId, fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Services from an Node.
     * List Node Services
     * @param nodeId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listNodeServices(nodeId: number, fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedNodeServicesList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNodeServices(nodeId, fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Node Service Bind in your account.
     * Retrieve details of an Node Service Bind
     * @param bindId
     * @param nodeId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveNodeServiceBindWithHttpInfo(bindId: number, nodeId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseRetrieveNodeServiceBind>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveNodeServiceBindWithHttpInfo(bindId, nodeId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Node Service Bind in your account.
     * Retrieve details of an Node Service Bind
     * @param bindId
     * @param nodeId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveNodeServiceBind(bindId: number, nodeId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<ResponseRetrieveNodeServiceBind> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveNodeServiceBind(bindId, nodeId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove the bind between Node and Service.
     * Unbind Node Service
     * @param bindId
     * @param nodeId
     */
    public unbindNodeServiceWithHttpInfo(bindId: number, nodeId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAsyncDeleteNodeServiceBind>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.unbindNodeServiceWithHttpInfo(bindId, nodeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove the bind between Node and Service.
     * Unbind Node Service
     * @param bindId
     * @param nodeId
     */
    public unbindNodeService(bindId: number, nodeId: number, _options?: PromiseConfigurationOptions): Promise<ResponseAsyncDeleteNodeServiceBind> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.unbindNodeService(bindId, nodeId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOrchestratorNodesApi } from './ObservableAPI';

import { OrchestratorNodesApiRequestFactory, OrchestratorNodesApiResponseProcessor} from "../apis/OrchestratorNodesApi";
export class PromiseOrchestratorNodesApi {
    private api: ObservableOrchestratorNodesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrchestratorNodesApiRequestFactory,
        responseProcessor?: OrchestratorNodesApiResponseProcessor
    ) {
        this.api = new ObservableOrchestratorNodesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete an Node.
     * Delete an Node
     * @param nodeId
     */
    public deleteNodeWithHttpInfo(nodeId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAsyncDeleteNodes>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteNodeWithHttpInfo(nodeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete an Node.
     * Delete an Node
     * @param nodeId
     */
    public deleteNode(nodeId: string, _options?: PromiseConfigurationOptions): Promise<ResponseAsyncDeleteNodes> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteNode(nodeId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Nodes of your account.
     * List Nodes
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [hashId] Search by hash_id
     * @param [name] Search by name
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listNodesWithHttpInfo(fields?: string, hashId?: string, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedNodesList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNodesWithHttpInfo(fields, hashId, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Nodes of your account.
     * List Nodes
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [hashId] Search by hash_id
     * @param [name] Search by name
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listNodes(fields?: string, hashId?: string, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedNodesList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNodes(fields, hashId, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Node without affecting other fields.
     * Partially update an Node
     * @param nodeId
     * @param [patchedNodesRequest]
     */
    public partialUpdateNodeWithHttpInfo(nodeId: string, patchedNodesRequest?: PatchedNodesRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAsyncNodes>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateNodeWithHttpInfo(nodeId, patchedNodesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Node without affecting other fields.
     * Partially update an Node
     * @param nodeId
     * @param [patchedNodesRequest]
     */
    public partialUpdateNode(nodeId: string, patchedNodesRequest?: PatchedNodesRequest, _options?: PromiseConfigurationOptions): Promise<ResponseAsyncNodes> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateNode(nodeId, patchedNodesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Node without affecting other fields.
     * Partially update an Node
     * @param nodeId
     * @param [patchedNodesRequest]
     */
    public partialUpdateNode2WithHttpInfo(nodeId: number, patchedNodesRequest?: PatchedNodesRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAsyncNodes>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateNode2WithHttpInfo(nodeId, patchedNodesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Node without affecting other fields.
     * Partially update an Node
     * @param nodeId
     * @param [patchedNodesRequest]
     */
    public partialUpdateNode2(nodeId: number, patchedNodesRequest?: PatchedNodesRequest, _options?: PromiseConfigurationOptions): Promise<ResponseAsyncNodes> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateNode2(nodeId, patchedNodesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Node in your account.
     * Retrieve details of an Node
     * @param nodeId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveNodeWithHttpInfo(nodeId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseRetrieveNodes>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveNodeWithHttpInfo(nodeId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Node in your account.
     * Retrieve details of an Node
     * @param nodeId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveNode(nodeId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<ResponseRetrieveNodes> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveNode(nodeId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Node in your account.
     * Retrieve details of an Node
     * @param nodeId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveNode2WithHttpInfo(nodeId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseRetrieveNodes>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveNode2WithHttpInfo(nodeId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Node in your account.
     * Retrieve details of an Node
     * @param nodeId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveNode2(nodeId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<ResponseRetrieveNodes> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveNode2(nodeId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Node. This replaces the entire Node with the new data provided.
     * Update an Node
     * @param nodeId
     * @param nodesRequest
     */
    public updateNodeWithHttpInfo(nodeId: string, nodesRequest: NodesRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAsyncNodes>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateNodeWithHttpInfo(nodeId, nodesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Node. This replaces the entire Node with the new data provided.
     * Update an Node
     * @param nodeId
     * @param nodesRequest
     */
    public updateNode(nodeId: string, nodesRequest: NodesRequest, _options?: PromiseConfigurationOptions): Promise<ResponseAsyncNodes> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateNode(nodeId, nodesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Node. This replaces the entire Node with the new data provided.
     * Update an Node
     * @param nodeId
     * @param nodesRequest
     */
    public updateNode2WithHttpInfo(nodeId: number, nodesRequest: NodesRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAsyncNodes>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateNode2WithHttpInfo(nodeId, nodesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Node. This replaces the entire Node with the new data provided.
     * Update an Node
     * @param nodeId
     * @param nodesRequest
     */
    public updateNode2(nodeId: number, nodesRequest: NodesRequest, _options?: PromiseConfigurationOptions): Promise<ResponseAsyncNodes> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateNode2(nodeId, nodesRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOrchestratorServiceResourcesApi } from './ObservableAPI';

import { OrchestratorServiceResourcesApiRequestFactory, OrchestratorServiceResourcesApiResponseProcessor} from "../apis/OrchestratorServiceResourcesApi";
export class PromiseOrchestratorServiceResourcesApi {
    private api: ObservableOrchestratorServiceResourcesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrchestratorServiceResourcesApiRequestFactory,
        responseProcessor?: OrchestratorServiceResourcesApiResponseProcessor
    ) {
        this.api = new ObservableOrchestratorServiceResourcesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a Resource on a Service.
     * Create Service Resource
     * @param serviceId
     * @param serviceResourceRequest
     */
    public createResourceWithHttpInfo(serviceId: number, serviceResourceRequest: ServiceResourceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ServiceResource>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createResourceWithHttpInfo(serviceId, serviceResourceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a Resource on a Service.
     * Create Service Resource
     * @param serviceId
     * @param serviceResourceRequest
     */
    public createResource(serviceId: number, serviceResourceRequest: ServiceResourceRequest, _options?: PromiseConfigurationOptions): Promise<ServiceResource> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createResource(serviceId, serviceResourceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Resource from your account.
     * Delete Resource
     * @param resourceId
     * @param serviceId
     */
    public deleteResourceWithHttpInfo(resourceId: number, serviceId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteResourceWithHttpInfo(resourceId, serviceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete Resource from your account.
     * Delete Resource
     * @param resourceId
     * @param serviceId
     */
    public deleteResource(resourceId: number, serviceId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteResource(resourceId, serviceId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all resources of a Service owned by your account.
     * List Service Resources
     * @param serviceId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listResourcesOfAServiceWithHttpInfo(serviceId: number, fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedServiceResourceList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listResourcesOfAServiceWithHttpInfo(serviceId, fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all resources of a Service owned by your account.
     * List Service Resources
     * @param serviceId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listResourcesOfAService(serviceId: number, fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedServiceResourceList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listResourcesOfAService(serviceId, fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Resource in your account.
     * Retrieve details of a Resource
     * @param resourceId
     * @param serviceId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveResourceWithHttpInfo(resourceId: number, serviceId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ServiceResourceId>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveResourceWithHttpInfo(resourceId, serviceId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Resource in your account.
     * Retrieve details of a Resource
     * @param resourceId
     * @param serviceId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveResource(resourceId: number, serviceId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<ServiceResourceId> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveResource(resourceId, serviceId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve content of a resource.
     * Retrieve content of a Resource
     * @param resourceId
     * @param serviceId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveResourceContentWithHttpInfo(resourceId: number, serviceId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Content>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveResourceContentWithHttpInfo(resourceId, serviceId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve content of a resource.
     * Retrieve content of a Resource
     * @param resourceId
     * @param serviceId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveResourceContent(resourceId: number, serviceId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<Content> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveResourceContent(resourceId, serviceId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Resource in your account.
     * Update Resource
     * @param resourceId
     * @param serviceId
     * @param serviceResourceIdRequest
     */
    public updateResourceWithHttpInfo(resourceId: number, serviceId: number, serviceResourceIdRequest: ServiceResourceIdRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ServiceResourceId>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateResourceWithHttpInfo(resourceId, serviceId, serviceResourceIdRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update Resource in your account.
     * Update Resource
     * @param resourceId
     * @param serviceId
     * @param serviceResourceIdRequest
     */
    public updateResource(resourceId: number, serviceId: number, serviceResourceIdRequest: ServiceResourceIdRequest, _options?: PromiseConfigurationOptions): Promise<ServiceResourceId> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateResource(resourceId, serviceId, serviceResourceIdRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Upload content of a Resource.
     * Upload content of a Resource
     * @param resourceId
     * @param serviceId
     * @param contentRequest
     */
    public uploadResourceContentWithHttpInfo(resourceId: number, serviceId: number, contentRequest: ContentRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Content>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.uploadResourceContentWithHttpInfo(resourceId, serviceId, contentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Upload content of a Resource.
     * Upload content of a Resource
     * @param resourceId
     * @param serviceId
     * @param contentRequest
     */
    public uploadResourceContent(resourceId: number, serviceId: number, contentRequest: ContentRequest, _options?: PromiseConfigurationOptions): Promise<Content> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.uploadResourceContent(resourceId, serviceId, contentRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOrchestratorServicesApi } from './ObservableAPI';

import { OrchestratorServicesApiRequestFactory, OrchestratorServicesApiResponseProcessor} from "../apis/OrchestratorServicesApi";
export class PromiseOrchestratorServicesApi {
    private api: ObservableOrchestratorServicesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrchestratorServicesApiRequestFactory,
        responseProcessor?: OrchestratorServicesApiResponseProcessor
    ) {
        this.api = new ObservableOrchestratorServicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an Service.
     * Create Service
     * @param [servicesRequest]
     */
    public createServiceWithHttpInfo(servicesRequest?: ServicesRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAsyncServices>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createServiceWithHttpInfo(servicesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create an Service.
     * Create Service
     * @param [servicesRequest]
     */
    public createService(servicesRequest?: ServicesRequest, _options?: PromiseConfigurationOptions): Promise<ResponseAsyncServices> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createService(servicesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Destruction of a specific Service in your account.
     * Destroy an Service
     * @param serviceId
     */
    public destroyServiceWithHttpInfo(serviceId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAsyncDeleteServices>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.destroyServiceWithHttpInfo(serviceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Destruction of a specific Service in your account.
     * Destroy an Service
     * @param serviceId
     */
    public destroyService(serviceId: number, _options?: PromiseConfigurationOptions): Promise<ResponseAsyncDeleteServices> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.destroyService(serviceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the list of Services of your account.
     * List Services
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [name] Search by name
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     */
    public listServicesWithHttpInfo(fields?: string, name?: string, ordering?: string, page?: number, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedServicesList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listServicesWithHttpInfo(fields, name, ordering, page, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the list of Services of your account.
     * List Services
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [name] Search by name
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     */
    public listServices(fields?: string, name?: string, ordering?: string, page?: number, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<PaginatedServicesList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listServices(fields, name, ordering, page, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Service without affecting other fields.
     * Partially update an Service
     * @param serviceId
     * @param [patchedServicesRequest]
     */
    public partialUpdateServiceWithHttpInfo(serviceId: number, patchedServicesRequest?: PatchedServicesRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAsyncServices>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateServiceWithHttpInfo(serviceId, patchedServicesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Service without affecting other fields.
     * Partially update an Service
     * @param serviceId
     * @param [patchedServicesRequest]
     */
    public partialUpdateService(serviceId: number, patchedServicesRequest?: PatchedServicesRequest, _options?: PromiseConfigurationOptions): Promise<ResponseAsyncServices> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateService(serviceId, patchedServicesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Service in your account.
     * Retrieve details of an Service
     * @param serviceId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveServiceWithHttpInfo(serviceId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseRetrieveServices>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveServiceWithHttpInfo(serviceId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Service in your account.
     * Retrieve details of an Service
     * @param serviceId
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveService(serviceId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<ResponseRetrieveServices> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveService(serviceId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Service replacing all fields.
     * Update an Service
     * @param serviceId
     * @param [servicesRequest]
     */
    public updateServiceWithHttpInfo(serviceId: string, servicesRequest?: ServicesRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseAsyncServices>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateServiceWithHttpInfo(serviceId, servicesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Service replacing all fields.
     * Update an Service
     * @param serviceId
     * @param [servicesRequest]
     */
    public updateService(serviceId: string, servicesRequest?: ServicesRequest, _options?: PromiseConfigurationOptions): Promise<ResponseAsyncServices> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateService(serviceId, servicesRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservablePolicyLockoutPolicyApi } from './ObservableAPI';

import { PolicyLockoutPolicyApiRequestFactory, PolicyLockoutPolicyApiResponseProcessor} from "../apis/PolicyLockoutPolicyApi";
export class PromisePolicyLockoutPolicyApi {
    private api: ObservablePolicyLockoutPolicyApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PolicyLockoutPolicyApiRequestFactory,
        responseProcessor?: PolicyLockoutPolicyApiResponseProcessor
    ) {
        this.api = new ObservablePolicyLockoutPolicyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Lockout Policy for the current account.
     * Get Lockout Policy
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveLockoutPolicyWithHttpInfo(fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LockoutPolicyResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveLockoutPolicyWithHttpInfo(fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Lockout Policy for the current account.
     * Get Lockout Policy
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveLockoutPolicy(fields?: string, _options?: PromiseConfigurationOptions): Promise<LockoutPolicyResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveLockoutPolicy(fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Put Lockout Policy for the current account.
     * Put Lockout Policy
     * @param lockoutPolicyRequest
     */
    public updateLockoutPolicyWithHttpInfo(lockoutPolicyRequest: LockoutPolicyRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LockoutPolicyResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLockoutPolicyWithHttpInfo(lockoutPolicyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Put Lockout Policy for the current account.
     * Put Lockout Policy
     * @param lockoutPolicyRequest
     */
    public updateLockoutPolicy(lockoutPolicyRequest: LockoutPolicyRequest, _options?: PromiseConfigurationOptions): Promise<LockoutPolicyResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLockoutPolicy(lockoutPolicyRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservablePolicyPoliciesApi } from './ObservableAPI';

import { PolicyPoliciesApiRequestFactory, PolicyPoliciesApiResponseProcessor} from "../apis/PolicyPoliciesApi";
export class PromisePolicyPoliciesApi {
    private api: ObservablePolicyPoliciesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PolicyPoliciesApiRequestFactory,
        responseProcessor?: PolicyPoliciesApiResponseProcessor
    ) {
        this.api = new ObservablePolicyPoliciesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new policy for your account.
     * Create a new policy
     * @param policyRequest
     */
    public createPolicyWithHttpInfo(policyRequest: PolicyRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PolicyResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPolicyWithHttpInfo(policyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new policy for your account.
     * Create a new policy
     * @param policyRequest
     */
    public createPolicy(policyRequest: PolicyRequest, _options?: PromiseConfigurationOptions): Promise<PolicyResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPolicy(policyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific policy from your account.
     * Delete a policy
     * @param policyId A unique integer value identifying the policy.
     */
    public deletePolicyWithHttpInfo(policyId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deletePolicyWithHttpInfo(policyId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific policy from your account.
     * Delete a policy
     * @param policyId A unique integer value identifying the policy.
     */
    public deletePolicy(policyId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deletePolicy(policyId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all your account policies.
     * List of account policies
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listPolicyWithHttpInfo(fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedPolicyList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listPolicyWithHttpInfo(fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all your account policies.
     * List of account policies
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listPolicy(fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedPolicyList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listPolicy(fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing policy without affecting other fields.
     * Partially update a policy
     * @param policyId A unique integer value identifying the policy.
     * @param [patchedPolicyRequest]
     */
    public partialUpdatePolicyWithHttpInfo(policyId: number, patchedPolicyRequest?: PatchedPolicyRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PolicyResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdatePolicyWithHttpInfo(policyId, patchedPolicyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing policy without affecting other fields.
     * Partially update a policy
     * @param policyId A unique integer value identifying the policy.
     * @param [patchedPolicyRequest]
     */
    public partialUpdatePolicy(policyId: number, patchedPolicyRequest?: PatchedPolicyRequest, _options?: PromiseConfigurationOptions): Promise<PolicyResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdatePolicy(policyId, patchedPolicyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific policy from your account.
     * Retrieve details from a policy
     * @param policyId A unique integer value identifying the policy.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrievePolicyWithHttpInfo(policyId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PolicyResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrievePolicyWithHttpInfo(policyId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific policy from your account.
     * Retrieve details from a policy
     * @param policyId A unique integer value identifying the policy.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrievePolicy(policyId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<PolicyResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrievePolicy(policyId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing policy. This replaces all policy rules with the new data provided.
     * Update a policy
     * @param policyId A unique integer value identifying the policy.
     * @param policyRequest
     */
    public updatePolicyWithHttpInfo(policyId: number, policyRequest: PolicyRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PolicyResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updatePolicyWithHttpInfo(policyId, policyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing policy. This replaces all policy rules with the new data provided.
     * Update a policy
     * @param policyId A unique integer value identifying the policy.
     * @param policyRequest
     */
    public updatePolicy(policyId: number, policyRequest: PolicyRequest, _options?: PromiseConfigurationOptions): Promise<PolicyResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updatePolicy(policyId, policyRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservablePolicySessionTimeoutPolicyApi } from './ObservableAPI';

import { PolicySessionTimeoutPolicyApiRequestFactory, PolicySessionTimeoutPolicyApiResponseProcessor} from "../apis/PolicySessionTimeoutPolicyApi";
export class PromisePolicySessionTimeoutPolicyApi {
    private api: ObservablePolicySessionTimeoutPolicyApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PolicySessionTimeoutPolicyApiRequestFactory,
        responseProcessor?: PolicySessionTimeoutPolicyApiResponseProcessor
    ) {
        this.api = new ObservablePolicySessionTimeoutPolicyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Session Timeout Policy for the current account.
     * Get Session Timeout Policy
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveSessionTimeoutPolicyWithHttpInfo(fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SessionTimeoutPolicyResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveSessionTimeoutPolicyWithHttpInfo(fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Session Timeout Policy for the current account.
     * Get Session Timeout Policy
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveSessionTimeoutPolicy(fields?: string, _options?: PromiseConfigurationOptions): Promise<SessionTimeoutPolicyResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveSessionTimeoutPolicy(fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Put Session Timeout Policy for the current account.
     * Put Session Timeout Policy
     * @param sessionTimeoutPolicyRequest
     */
    public updateSessionTimeoutPolicyWithHttpInfo(sessionTimeoutPolicyRequest: SessionTimeoutPolicyRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SessionTimeoutPolicyResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSessionTimeoutPolicyWithHttpInfo(sessionTimeoutPolicyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Put Session Timeout Policy for the current account.
     * Put Session Timeout Policy
     * @param sessionTimeoutPolicyRequest
     */
    public updateSessionTimeoutPolicy(sessionTimeoutPolicyRequest: SessionTimeoutPolicyRequest, _options?: PromiseConfigurationOptions): Promise<SessionTimeoutPolicyResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSessionTimeoutPolicy(sessionTimeoutPolicyRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservablePublisherManagementApi } from './ObservableAPI';

import { PublisherManagementApiRequestFactory, PublisherManagementApiResponseProcessor} from "../apis/PublisherManagementApi";
export class PromisePublisherManagementApi {
    private api: ObservablePublisherManagementApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PublisherManagementApiRequestFactory,
        responseProcessor?: PublisherManagementApiResponseProcessor
    ) {
        this.api = new ObservablePublisherManagementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get details of the publisher associated with the authenticated user\'s organization
     * Get publisher details
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public getPublisherDetailsWithHttpInfo(fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseRetrievePublisher>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPublisherDetailsWithHttpInfo(fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Get details of the publisher associated with the authenticated user\'s organization
     * Get publisher details
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public getPublisherDetails(fields?: string, _options?: PromiseConfigurationOptions): Promise<ResponseRetrievePublisher> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPublisherDetails(fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update details of the publisher associated with the authenticated user\'s organization
     * Update publisher details
     * @param publisherRequest
     */
    public updatePublisherDetailsWithHttpInfo(publisherRequest: PublisherRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponsePublisher>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updatePublisherDetailsWithHttpInfo(publisherRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update details of the publisher associated with the authenticated user\'s organization
     * Update publisher details
     * @param publisherRequest
     */
    public updatePublisherDetails(publisherRequest: PublisherRequest, _options?: PromiseConfigurationOptions): Promise<ResponsePublisher> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updatePublisherDetails(publisherRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservablePurgeApi } from './ObservableAPI';

import { PurgeApiRequestFactory, PurgeApiResponseProcessor} from "../apis/PurgeApi";
export class PromisePurgeApi {
    private api: ObservablePurgeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PurgeApiRequestFactory,
        responseProcessor?: PurgeApiResponseProcessor
    ) {
        this.api = new ObservablePurgeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Purge Request in your account.
     * Create a Purge Request
     * @param purgeType type of purge: URL, Wildcard or Cachekey
     * @param purgeRequest
     */
    public createPurgeRequestWithHttpInfo(purgeType: 'cachekey' | 'url' | 'wildcard', purgeRequest: PurgeRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PurgeResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPurgeRequestWithHttpInfo(purgeType, purgeRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Purge Request in your account.
     * Create a Purge Request
     * @param purgeType type of purge: URL, Wildcard or Cachekey
     * @param purgeRequest
     */
    public createPurgeRequest(purgeType: 'cachekey' | 'url' | 'wildcard', purgeRequest: PurgeRequest, _options?: PromiseConfigurationOptions): Promise<PurgeResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPurgeRequest(purgeType, purgeRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSQLApi } from './ObservableAPI';

import { SQLApiRequestFactory, SQLApiResponseProcessor} from "../apis/SQLApi";
export class PromiseSQLApi {
    private api: ObservableSQLApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SQLApiRequestFactory,
        responseProcessor?: SQLApiResponseProcessor
    ) {
        this.api = new ObservableSQLApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new database for your account.
     * Create a database
     * @param databaseRequest
     */
    public createDatabaseWithHttpInfo(databaseRequest: DatabaseRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DatabaseDetailResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDatabaseWithHttpInfo(databaseRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new database for your account.
     * Create a database
     * @param databaseRequest
     */
    public createDatabase(databaseRequest: DatabaseRequest, _options?: PromiseConfigurationOptions): Promise<DatabaseDetailResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDatabase(databaseRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Schedule the deletion of a specific database in your account.
     * Delete a database
     * @param databaseId A unique integer value identifying this database.
     */
    public deleteDatabaseWithHttpInfo(databaseId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDatabaseWithHttpInfo(databaseId, observableOptions);
        return result.toPromise();
    }

    /**
     * Schedule the deletion of a specific database in your account.
     * Delete a database
     * @param databaseId A unique integer value identifying this database.
     */
    public deleteDatabase(databaseId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDatabase(databaseId, observableOptions);
        return result.toPromise();
    }

    /**
     * Execute a query into a database for your account.
     * Execute a query into a database
     * @param databaseId A unique integer value identifying this database.
     * @param sQLStatementsRequest
     */
    public executeQueryWithHttpInfo(databaseId: number, sQLStatementsRequest: SQLStatementsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SQLResultResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.executeQueryWithHttpInfo(databaseId, sQLStatementsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Execute a query into a database for your account.
     * Execute a query into a database
     * @param databaseId A unique integer value identifying this database.
     * @param sQLStatementsRequest
     */
    public executeQuery(databaseId: number, sQLStatementsRequest: SQLStatementsRequest, _options?: PromiseConfigurationOptions): Promise<SQLResultResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.executeQuery(databaseId, sQLStatementsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * List all databases owned by your account.
     * List databases
     * @param [active] Filter by active status.
     * @param [createdAtGte] Filter by created_at (greater than or equal).
     * @param [createdAtLte] Filter by created_at (less than or equal).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     * @param [status] Filter by status (accepts comma-separated values).
     * @param [updatedAtGte] Filter by updated_at (greater than or equal).
     * @param [updatedAtLte] Filter by updated_at (less than or equal).
     */
    public listDatabasesWithHttpInfo(active?: boolean, createdAtGte?: Date, createdAtLte?: Date, fields?: string, id?: number, lastEditor?: string, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, status?: string, updatedAtGte?: Date, updatedAtLte?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedDatabaseDetailList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDatabasesWithHttpInfo(active, createdAtGte, createdAtLte, fields, id, lastEditor, name, ordering, page, pageSize, search, status, updatedAtGte, updatedAtLte, observableOptions);
        return result.toPromise();
    }

    /**
     * List all databases owned by your account.
     * List databases
     * @param [active] Filter by active status.
     * @param [createdAtGte] Filter by created_at (greater than or equal).
     * @param [createdAtLte] Filter by created_at (less than or equal).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     * @param [status] Filter by status (accepts comma-separated values).
     * @param [updatedAtGte] Filter by updated_at (greater than or equal).
     * @param [updatedAtLte] Filter by updated_at (less than or equal).
     */
    public listDatabases(active?: boolean, createdAtGte?: Date, createdAtLte?: Date, fields?: string, id?: number, lastEditor?: string, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, status?: string, updatedAtGte?: Date, updatedAtLte?: Date, _options?: PromiseConfigurationOptions): Promise<PaginatedDatabaseDetailList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDatabases(active, createdAtGte, createdAtLte, fields, id, lastEditor, name, ordering, page, pageSize, search, status, updatedAtGte, updatedAtLte, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific database in your account.
     * Retrieve details from a database
     * @param databaseId A unique integer value identifying this database.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveDatabaseWithHttpInfo(databaseId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DatabaseDetailResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveDatabaseWithHttpInfo(databaseId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific database in your account.
     * Retrieve details from a database
     * @param databaseId A unique integer value identifying this database.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveDatabase(databaseId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<DatabaseDetailResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveDatabase(databaseId, fields, observableOptions);
        return result.toPromise();
    }


}



import { ObservableStorageBucketsApi } from './ObservableAPI';

import { StorageBucketsApiRequestFactory, StorageBucketsApiResponseProcessor} from "../apis/StorageBucketsApi";
export class PromiseStorageBucketsApi {
    private api: ObservableStorageBucketsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StorageBucketsApiRequestFactory,
        responseProcessor?: StorageBucketsApiResponseProcessor
    ) {
        this.api = new ObservableStorageBucketsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new bucket.
     * Create a new bucket
     * @param bucketCreateRequest
     */
    public createBucketWithHttpInfo(bucketCreateRequest: BucketCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BucketCreateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createBucketWithHttpInfo(bucketCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new bucket.
     * Create a new bucket
     * @param bucketCreateRequest
     */
    public createBucket(bucketCreateRequest: BucketCreateRequest, _options?: PromiseConfigurationOptions): Promise<BucketCreateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createBucket(bucketCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific bucket.
     * Delete a bucket
     * @param bucketName The name of the bucket
     */
    public deleteBucketWithHttpInfo(bucketName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteBucketWithHttpInfo(bucketName, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific bucket.
     * Delete a bucket
     * @param bucketName The name of the bucket
     */
    public deleteBucket(bucketName: string, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteBucket(bucketName, observableOptions);
        return result.toPromise();
    }

    /**
     * List all buckets.
     * List buckets
     * @param [bucket] Filter by bucket (exact match).
     * @param [created] Filter by creation date (exact match).
     * @param [createdGte] Filter by creation date (greater than or equal).
     * @param [createdLte] Filter by creation date (less than or equal).
     * @param [description] Filter by description (case-insensitive, partial match).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModified] Filter by last modified date (exact match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     * @param [status] Filter by status (accepts comma-separated values).
     * @param [workloadsAccess] Filter by workloads access (accepts comma-separated values).
     */
    public listBucketsWithHttpInfo(bucket?: string, created?: Date, createdGte?: Date, createdLte?: Date, description?: string, fields?: string, lastEditor?: string, lastModified?: Date, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, status?: string, workloadsAccess?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedBucketList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listBucketsWithHttpInfo(bucket, created, createdGte, createdLte, description, fields, lastEditor, lastModified, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, search, status, workloadsAccess, observableOptions);
        return result.toPromise();
    }

    /**
     * List all buckets.
     * List buckets
     * @param [bucket] Filter by bucket (exact match).
     * @param [created] Filter by creation date (exact match).
     * @param [createdGte] Filter by creation date (greater than or equal).
     * @param [createdLte] Filter by creation date (less than or equal).
     * @param [description] Filter by description (case-insensitive, partial match).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModified] Filter by last modified date (exact match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     * @param [status] Filter by status (accepts comma-separated values).
     * @param [workloadsAccess] Filter by workloads access (accepts comma-separated values).
     */
    public listBuckets(bucket?: string, created?: Date, createdGte?: Date, createdLte?: Date, description?: string, fields?: string, lastEditor?: string, lastModified?: Date, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, status?: string, workloadsAccess?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedBucketList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listBuckets(bucket, created, createdGte, createdLte, description, fields, lastEditor, lastModified, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, search, status, workloadsAccess, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific bucket.
     * Retrieve a bucket
     * @param bucketName The name of the bucket
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveBucketWithHttpInfo(bucketName: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BucketCreateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveBucketWithHttpInfo(bucketName, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific bucket.
     * Retrieve a bucket
     * @param bucketName The name of the bucket
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveBucket(bucketName: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<BucketCreateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveBucket(bucketName, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update bucket information (bucket name cannot be changed)
     * Update bucket info
     * @param bucketName The name of the bucket
     * @param [patchedBucketRequest]
     */
    public updateBucketWithHttpInfo(bucketName: string, patchedBucketRequest?: PatchedBucketRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BucketCreateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateBucketWithHttpInfo(bucketName, patchedBucketRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update bucket information (bucket name cannot be changed)
     * Update bucket info
     * @param bucketName The name of the bucket
     * @param [patchedBucketRequest]
     */
    public updateBucket(bucketName: string, patchedBucketRequest?: PatchedBucketRequest, _options?: PromiseConfigurationOptions): Promise<BucketCreateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateBucket(bucketName, patchedBucketRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableStorageCredentialsApi } from './ObservableAPI';

import { StorageCredentialsApiRequestFactory, StorageCredentialsApiResponseProcessor} from "../apis/StorageCredentialsApi";
export class PromiseStorageCredentialsApi {
    private api: ObservableStorageCredentialsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StorageCredentialsApiRequestFactory,
        responseProcessor?: StorageCredentialsApiResponseProcessor
    ) {
        this.api = new ObservableStorageCredentialsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new credential.
     * Create a new credential
     * @param credentialCreateRequest
     */
    public createCredentialWithHttpInfo(credentialCreateRequest: CredentialCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CredentialResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCredentialWithHttpInfo(credentialCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new credential.
     * Create a new credential
     * @param credentialCreateRequest
     */
    public createCredential(credentialCreateRequest: CredentialCreateRequest, _options?: PromiseConfigurationOptions): Promise<CredentialResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCredential(credentialCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific credential.
     * Delete a credential
     * @param credentialId The unique identifier of the credential
     */
    public deleteCredentialWithHttpInfo(credentialId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCredentialWithHttpInfo(credentialId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific credential.
     * Delete a credential
     * @param credentialId The unique identifier of the credential
     */
    public deleteCredential(credentialId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCredential(credentialId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all credentials.
     * List credentials
     * @param [accessKey] Filter by access key (exact match).
     * @param [buckets] Filter by bucket name (exact match).
     * @param [bucketsIn] Filter by multiple bucket names (comma-separated).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModified] Filter by last modified date (exact match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listCredentialsWithHttpInfo(accessKey?: string, buckets?: string, bucketsIn?: string, fields?: string, id?: number, lastEditor?: string, lastModified?: Date, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedCredentialList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCredentialsWithHttpInfo(accessKey, buckets, bucketsIn, fields, id, lastEditor, lastModified, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all credentials.
     * List credentials
     * @param [accessKey] Filter by access key (exact match).
     * @param [buckets] Filter by bucket name (exact match).
     * @param [bucketsIn] Filter by multiple bucket names (comma-separated).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModified] Filter by last modified date (exact match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listCredentials(accessKey?: string, buckets?: string, bucketsIn?: string, fields?: string, id?: number, lastEditor?: string, lastModified?: Date, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedCredentialList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCredentials(accessKey, buckets, bucketsIn, fields, id, lastEditor, lastModified, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific credential.
     * Retrieve details from a credential
     * @param credentialId The unique identifier of the credential
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveCredentialWithHttpInfo(credentialId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CredentialResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveCredentialWithHttpInfo(credentialId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific credential.
     * Retrieve details from a credential
     * @param credentialId The unique identifier of the credential
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveCredential(credentialId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<CredentialResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveCredential(credentialId, fields, observableOptions);
        return result.toPromise();
    }


}



import { ObservableStorageObjectsApi } from './ObservableAPI';

import { StorageObjectsApiRequestFactory, StorageObjectsApiResponseProcessor} from "../apis/StorageObjectsApi";
export class PromiseStorageObjectsApi {
    private api: ObservableStorageObjectsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StorageObjectsApiRequestFactory,
        responseProcessor?: StorageObjectsApiResponseProcessor
    ) {
        this.api = new ObservableStorageObjectsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Copy an object to a new key within the same bucket.
     * Copy object to new key
     * @param bucketName The name of the bucket
     * @param newObjectKey The key/path of the destination object within the bucket
     * @param objectKey The key/path of the source object within the bucket
     * @param [body]
     */
    public copyObjectKeyWithHttpInfo(bucketName: string, newObjectKey: string, objectKey: string, body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.copyObjectKeyWithHttpInfo(bucketName, newObjectKey, objectKey, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Copy an object to a new key within the same bucket.
     * Copy object to new key
     * @param bucketName The name of the bucket
     * @param newObjectKey The key/path of the destination object within the bucket
     * @param objectKey The key/path of the source object within the bucket
     * @param [body]
     */
    public copyObjectKey(bucketName: string, newObjectKey: string, objectKey: string, body?: any, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.copyObjectKey(bucketName, newObjectKey, objectKey, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new object key in the bucket. The object\'s Content-Type is defined by the Content-Type header. If this header is not included, the Content-Type will be automatically detected.
     * Create new object key.
     * @param bucketName The name of the bucket
     * @param objectKey The key/path of the object within the bucket
     * @param [storageContentType] The MIME type of the object being uploaded (Renamed from Content-Type to avoid SDK conflicts)
     * @param [body]
     */
    public createObjectKeyWithHttpInfo(bucketName: string, objectKey: string, storageContentType?: string, body?: HttpFile, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SuccessObjectOperationAsync | SuccessObjectOperation>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createObjectKeyWithHttpInfo(bucketName, objectKey, storageContentType, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new object key in the bucket. The object\'s Content-Type is defined by the Content-Type header. If this header is not included, the Content-Type will be automatically detected.
     * Create new object key.
     * @param bucketName The name of the bucket
     * @param objectKey The key/path of the object within the bucket
     * @param [storageContentType] The MIME type of the object being uploaded (Renamed from Content-Type to avoid SDK conflicts)
     * @param [body]
     */
    public createObjectKey(bucketName: string, objectKey: string, storageContentType?: string, body?: HttpFile, _options?: PromiseConfigurationOptions): Promise<SuccessObjectOperationAsync | SuccessObjectOperation> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createObjectKey(bucketName, objectKey, storageContentType, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Upon a successful deletion request, the object will be permanently deleted after a 24-hour grace period.
     * Delete object key
     * @param bucketName The name of the bucket
     * @param objectKey The key/path of the object within the bucket
     */
    public deleteObjectKeyWithHttpInfo(bucketName: string, objectKey: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteObjectKeyWithHttpInfo(bucketName, objectKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Upon a successful deletion request, the object will be permanently deleted after a 24-hour grace period.
     * Delete object key
     * @param bucketName The name of the bucket
     * @param objectKey The key/path of the object within the bucket
     */
    public deleteObjectKey(bucketName: string, objectKey: string, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteObjectKey(bucketName, objectKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Download the object key from bucket.
     * Download object
     * @param bucketName The name of the bucket
     * @param objectKey The key/path of the object within the bucket
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public downloadObjectWithHttpInfo(bucketName: string, objectKey: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HttpFile>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.downloadObjectWithHttpInfo(bucketName, objectKey, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Download the object key from bucket.
     * Download object
     * @param bucketName The name of the bucket
     * @param objectKey The key/path of the object within the bucket
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public downloadObject(bucketName: string, objectKey: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpFile> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.downloadObject(bucketName, objectKey, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * List objects from bucket
     * List objects from bucket
     * @param bucketName The name of the bucket
     * @param [allLevels] If true, lists objects recursively. If false, lists only the first level using Delimiter&#x3D;\&#39;/\&#39; (default: true).
     * @param [continuationToken] A continuation token for the next page of records.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [maxObjectCount] Number of results to be returned on the page. Limited to 1000 objects.
     * @param [prefix] Filter objects by key prefix. If empty, lists from the bucket root (default: empty).
     */
    public listObjectsWithHttpInfo(bucketName: string, allLevels?: boolean, continuationToken?: string, fields?: string, maxObjectCount?: number, prefix?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResponseBucketObject>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listObjectsWithHttpInfo(bucketName, allLevels, continuationToken, fields, maxObjectCount, prefix, observableOptions);
        return result.toPromise();
    }

    /**
     * List objects from bucket
     * List objects from bucket
     * @param bucketName The name of the bucket
     * @param [allLevels] If true, lists objects recursively. If false, lists only the first level using Delimiter&#x3D;\&#39;/\&#39; (default: true).
     * @param [continuationToken] A continuation token for the next page of records.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [maxObjectCount] Number of results to be returned on the page. Limited to 1000 objects.
     * @param [prefix] Filter objects by key prefix. If empty, lists from the bucket root (default: empty).
     */
    public listObjects(bucketName: string, allLevels?: boolean, continuationToken?: string, fields?: string, maxObjectCount?: number, prefix?: string, _options?: PromiseConfigurationOptions): Promise<ResponseBucketObject> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listObjects(bucketName, allLevels, continuationToken, fields, maxObjectCount, prefix, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the object key from bucket. The object\'s Content-Type is defined by the Content-Type header. If this header is not included, the Content-Type will be automatically detected.
     * Update the object key.
     * @param bucketName The name of the bucket
     * @param objectKey The key/path of the object within the bucket
     * @param [storageContentType] The MIME type of the object being uploaded (Renamed from Content-Type to avoid SDK conflicts)
     * @param [body]
     */
    public updateObjectKeyWithHttpInfo(bucketName: string, objectKey: string, storageContentType?: string, body?: HttpFile, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SuccessObjectOperationAsync | SuccessObjectOperation>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateObjectKeyWithHttpInfo(bucketName, objectKey, storageContentType, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the object key from bucket. The object\'s Content-Type is defined by the Content-Type header. If this header is not included, the Content-Type will be automatically detected.
     * Update the object key.
     * @param bucketName The name of the bucket
     * @param objectKey The key/path of the object within the bucket
     * @param [storageContentType] The MIME type of the object being uploaded (Renamed from Content-Type to avoid SDK conflicts)
     * @param [body]
     */
    public updateObjectKey(bucketName: string, objectKey: string, storageContentType?: string, body?: HttpFile, _options?: PromiseConfigurationOptions): Promise<SuccessObjectOperationAsync | SuccessObjectOperation> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateObjectKey(bucketName, objectKey, storageContentType, body, observableOptions);
        return result.toPromise();
    }


}



import { ObservableUsersLockoutApi } from './ObservableAPI';

import { UsersLockoutApiRequestFactory, UsersLockoutApiResponseProcessor} from "../apis/UsersLockoutApi";
export class PromiseUsersLockoutApi {
    private api: ObservableUsersLockoutApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersLockoutApiRequestFactory,
        responseProcessor?: UsersLockoutApiResponseProcessor
    ) {
        this.api = new ObservableUsersLockoutApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Destroy Lockout info from user.
     * Unlock user
     * @param userId A unique integer value identifying the user.
     */
    public destroyLockoutUserWithHttpInfo(userId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.destroyLockoutUserWithHttpInfo(userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Destroy Lockout info from user.
     * Unlock user
     * @param userId A unique integer value identifying the user.
     */
    public destroyLockoutUser(userId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.destroyLockoutUser(userId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableVCSContinuousDeploymentExecutionsApi } from './ObservableAPI';

import { VCSContinuousDeploymentExecutionsApiRequestFactory, VCSContinuousDeploymentExecutionsApiResponseProcessor} from "../apis/VCSContinuousDeploymentExecutionsApi";
export class PromiseVCSContinuousDeploymentExecutionsApi {
    private api: ObservableVCSContinuousDeploymentExecutionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VCSContinuousDeploymentExecutionsApiRequestFactory,
        responseProcessor?: VCSContinuousDeploymentExecutionsApiResponseProcessor
    ) {
        this.api = new ObservableVCSContinuousDeploymentExecutionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new continuous deployment execution.
     * Create a execution
     * @param continuousDeploymentId Unique identifier of the continuous deployment
     * @param [body] No request body required
     */
    public createExecutionWithHttpInfo(continuousDeploymentId: number, body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ExecutionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createExecutionWithHttpInfo(continuousDeploymentId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new continuous deployment execution.
     * Create a execution
     * @param continuousDeploymentId Unique identifier of the continuous deployment
     * @param [body] No request body required
     */
    public createExecution(continuousDeploymentId: number, body?: any, _options?: PromiseConfigurationOptions): Promise<ExecutionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createExecution(continuousDeploymentId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * List all continuous deployment executions.
     * List executions
     * @param continuousDeploymentId Unique identifier of the continuous deployment
     * @param [createdAtGte] Filter by created date (greater than or equal).
     * @param [createdAtLte] Filter by created date (less than or equal).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     * @param [status] Filter by status (accepts comma-separated values).
     * @param [updatedAtGte] Filter by updated date (greater than or equal).
     * @param [updatedAtLte] Filter by updated date (less than or equal).
     */
    public listExecutionsWithHttpInfo(continuousDeploymentId: number, createdAtGte?: Date, createdAtLte?: Date, fields?: string, id?: number, ordering?: string, page?: number, pageSize?: number, search?: string, status?: string, updatedAtGte?: Date, updatedAtLte?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedExecutionListResponseList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listExecutionsWithHttpInfo(continuousDeploymentId, createdAtGte, createdAtLte, fields, id, ordering, page, pageSize, search, status, updatedAtGte, updatedAtLte, observableOptions);
        return result.toPromise();
    }

    /**
     * List all continuous deployment executions.
     * List executions
     * @param continuousDeploymentId Unique identifier of the continuous deployment
     * @param [createdAtGte] Filter by created date (greater than or equal).
     * @param [createdAtLte] Filter by created date (less than or equal).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     * @param [status] Filter by status (accepts comma-separated values).
     * @param [updatedAtGte] Filter by updated date (greater than or equal).
     * @param [updatedAtLte] Filter by updated date (less than or equal).
     */
    public listExecutions(continuousDeploymentId: number, createdAtGte?: Date, createdAtLte?: Date, fields?: string, id?: number, ordering?: string, page?: number, pageSize?: number, search?: string, status?: string, updatedAtGte?: Date, updatedAtLte?: Date, _options?: PromiseConfigurationOptions): Promise<PaginatedExecutionListResponseList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listExecutions(continuousDeploymentId, createdAtGte, createdAtLte, fields, id, ordering, page, pageSize, search, status, updatedAtGte, updatedAtLte, observableOptions);
        return result.toPromise();
    }


}



import { ObservableVCSContinuousDeploymentExecutorApi } from './ObservableAPI';

import { VCSContinuousDeploymentExecutorApiRequestFactory, VCSContinuousDeploymentExecutorApiResponseProcessor} from "../apis/VCSContinuousDeploymentExecutorApi";
export class PromiseVCSContinuousDeploymentExecutorApi {
    private api: ObservableVCSContinuousDeploymentExecutorApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VCSContinuousDeploymentExecutorApiRequestFactory,
        responseProcessor?: VCSContinuousDeploymentExecutorApiResponseProcessor
    ) {
        this.api = new ObservableVCSContinuousDeploymentExecutorApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve details from a specific continuous deployment executor.
     * Retrieve details from a executor
     * @param continuousDeploymentId Unique identifier of the continuous deployment
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveExecutorWithHttpInfo(continuousDeploymentId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ExecutorResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveExecutorWithHttpInfo(continuousDeploymentId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific continuous deployment executor.
     * Retrieve details from a executor
     * @param continuousDeploymentId Unique identifier of the continuous deployment
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveExecutor(continuousDeploymentId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<ExecutorResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveExecutor(continuousDeploymentId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update continuous deployment executor information.
     * Update a executor
     * @param continuousDeploymentId Unique identifier of the continuous deployment
     * @param [body] No request body required
     */
    public updateExecutorWithHttpInfo(continuousDeploymentId: number, body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ExecutorResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateExecutorWithHttpInfo(continuousDeploymentId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Update continuous deployment executor information.
     * Update a executor
     * @param continuousDeploymentId Unique identifier of the continuous deployment
     * @param [body] No request body required
     */
    public updateExecutor(continuousDeploymentId: number, body?: any, _options?: PromiseConfigurationOptions): Promise<ExecutorResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateExecutor(continuousDeploymentId, body, observableOptions);
        return result.toPromise();
    }


}



import { ObservableVCSContinuousDeploymentsApi } from './ObservableAPI';

import { VCSContinuousDeploymentsApiRequestFactory, VCSContinuousDeploymentsApiResponseProcessor} from "../apis/VCSContinuousDeploymentsApi";
export class PromiseVCSContinuousDeploymentsApi {
    private api: ObservableVCSContinuousDeploymentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VCSContinuousDeploymentsApiRequestFactory,
        responseProcessor?: VCSContinuousDeploymentsApiResponseProcessor
    ) {
        this.api = new ObservableVCSContinuousDeploymentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new continuous deployment.
     * Create a continuous deployment
     * @param continuousDeploymentRequest
     */
    public createContinuousDeploymentWithHttpInfo(continuousDeploymentRequest: ContinuousDeploymentRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContinuousDeploymentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createContinuousDeploymentWithHttpInfo(continuousDeploymentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new continuous deployment.
     * Create a continuous deployment
     * @param continuousDeploymentRequest
     */
    public createContinuousDeployment(continuousDeploymentRequest: ContinuousDeploymentRequest, _options?: PromiseConfigurationOptions): Promise<ContinuousDeploymentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createContinuousDeployment(continuousDeploymentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific continuous deployment.
     * Delete a continuous deployment
     * @param continuousDeploymentId Unique identifier of the continuous deployment
     */
    public deleteContinuousDeploymentWithHttpInfo(continuousDeploymentId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteContinuousDeploymentWithHttpInfo(continuousDeploymentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific continuous deployment.
     * Delete a continuous deployment
     * @param continuousDeploymentId Unique identifier of the continuous deployment
     */
    public deleteContinuousDeployment(continuousDeploymentId: string, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteContinuousDeployment(continuousDeploymentId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all continuous deployments.
     * List continuous deployments
     * @param [branch] Filter by branch (exact match).
     * @param [createdGte] Filter by created date (greater than or equal).
     * @param [createdLte] Filter by created date (less than or equal).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [repository] Filter by repository (case-insensitive, partial match).
     * @param [search] A search term.
     */
    public listContinuousDeploymentsWithHttpInfo(branch?: string, createdGte?: Date, createdLte?: Date, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, repository?: string, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedContinuousDeploymentListResponseList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listContinuousDeploymentsWithHttpInfo(branch, createdGte, createdLte, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, repository, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all continuous deployments.
     * List continuous deployments
     * @param [branch] Filter by branch (exact match).
     * @param [createdGte] Filter by created date (greater than or equal).
     * @param [createdLte] Filter by created date (less than or equal).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [repository] Filter by repository (case-insensitive, partial match).
     * @param [search] A search term.
     */
    public listContinuousDeployments(branch?: string, createdGte?: Date, createdLte?: Date, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, name?: string, ordering?: string, page?: number, pageSize?: number, repository?: string, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedContinuousDeploymentListResponseList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listContinuousDeployments(branch, createdGte, createdLte, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, name, ordering, page, pageSize, repository, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Partialy update continuous deployment information.
     * Partialy update a continuous deployment
     * @param continuousDeploymentId Unique identifier of the continuous deployment
     * @param [patchedContinuousDeploymentRequest]
     */
    public partialUpdateContinuousDeploymentWithHttpInfo(continuousDeploymentId: string, patchedContinuousDeploymentRequest?: PatchedContinuousDeploymentRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContinuousDeploymentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateContinuousDeploymentWithHttpInfo(continuousDeploymentId, patchedContinuousDeploymentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Partialy update continuous deployment information.
     * Partialy update a continuous deployment
     * @param continuousDeploymentId Unique identifier of the continuous deployment
     * @param [patchedContinuousDeploymentRequest]
     */
    public partialUpdateContinuousDeployment(continuousDeploymentId: string, patchedContinuousDeploymentRequest?: PatchedContinuousDeploymentRequest, _options?: PromiseConfigurationOptions): Promise<ContinuousDeploymentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateContinuousDeployment(continuousDeploymentId, patchedContinuousDeploymentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific continuous deployment.
     * Retrieve details from a continuous deployment
     * @param continuousDeploymentId Unique identifier of the continuous deployment
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveContinuousDeploymentWithHttpInfo(continuousDeploymentId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContinuousDeploymentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveContinuousDeploymentWithHttpInfo(continuousDeploymentId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific continuous deployment.
     * Retrieve details from a continuous deployment
     * @param continuousDeploymentId Unique identifier of the continuous deployment
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveContinuousDeployment(continuousDeploymentId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<ContinuousDeploymentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveContinuousDeployment(continuousDeploymentId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update continuous deployment information.
     * Update a continuous deployment
     * @param continuousDeploymentId Unique identifier of the continuous deployment
     * @param continuousDeploymentRequest
     */
    public updateContinuousDeploymentWithHttpInfo(continuousDeploymentId: string, continuousDeploymentRequest: ContinuousDeploymentRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContinuousDeploymentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateContinuousDeploymentWithHttpInfo(continuousDeploymentId, continuousDeploymentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update continuous deployment information.
     * Update a continuous deployment
     * @param continuousDeploymentId Unique identifier of the continuous deployment
     * @param continuousDeploymentRequest
     */
    public updateContinuousDeployment(continuousDeploymentId: string, continuousDeploymentRequest: ContinuousDeploymentRequest, _options?: PromiseConfigurationOptions): Promise<ContinuousDeploymentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateContinuousDeployment(continuousDeploymentId, continuousDeploymentRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableVCSExecutionScriptsApi } from './ObservableAPI';

import { VCSExecutionScriptsApiRequestFactory, VCSExecutionScriptsApiResponseProcessor} from "../apis/VCSExecutionScriptsApi";
export class PromiseVCSExecutionScriptsApi {
    private api: ObservableVCSExecutionScriptsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VCSExecutionScriptsApiRequestFactory,
        responseProcessor?: VCSExecutionScriptsApiResponseProcessor
    ) {
        this.api = new ObservableVCSExecutionScriptsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all execution scripts.
     * List execution scripts
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listExecutionScriptsWithHttpInfo(fields?: string, id?: number, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedExecutionScriptListResponseList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listExecutionScriptsWithHttpInfo(fields, id, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all execution scripts.
     * List execution scripts
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listExecutionScripts(fields?: string, id?: number, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedExecutionScriptListResponseList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listExecutionScripts(fields, id, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific execution script.
     * Retrieve details from a execution script
     * @param executionScriptId A unique integer value identifying this execution script.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveExecutionScriptWithHttpInfo(executionScriptId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ExecutionScriptResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveExecutionScriptWithHttpInfo(executionScriptId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific execution script.
     * Retrieve details from a execution script
     * @param executionScriptId A unique integer value identifying this execution script.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveExecutionScript(executionScriptId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<ExecutionScriptResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveExecutionScript(executionScriptId, fields, observableOptions);
        return result.toPromise();
    }


}



import { ObservableVCSIntegrationsApi } from './ObservableAPI';

import { VCSIntegrationsApiRequestFactory, VCSIntegrationsApiResponseProcessor} from "../apis/VCSIntegrationsApi";
export class PromiseVCSIntegrationsApi {
    private api: ObservableVCSIntegrationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VCSIntegrationsApiRequestFactory,
        responseProcessor?: VCSIntegrationsApiResponseProcessor
    ) {
        this.api = new ObservableVCSIntegrationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a specific account integration.
     * Delete an integration
     * @param integrationId Unique identifier of the integration
     */
    public deleteIntegrationWithHttpInfo(integrationId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteIntegrationWithHttpInfo(integrationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific account integration.
     * Delete an integration
     * @param integrationId Unique identifier of the integration
     */
    public deleteIntegration(integrationId: string, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteIntegration(integrationId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all account integrations.
     * List integrations
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [platform] Filter by platform id (exact match).
     * @param [scope] Filter by scope (case-insensitive, partial match).
     * @param [search] A search term.
     */
    public listIntegrationsWithHttpInfo(fields?: string, id?: number, ordering?: string, page?: number, pageSize?: number, platform?: string, scope?: string, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedIntegrationListResponseList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listIntegrationsWithHttpInfo(fields, id, ordering, page, pageSize, platform, scope, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all account integrations.
     * List integrations
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [platform] Filter by platform id (exact match).
     * @param [scope] Filter by scope (case-insensitive, partial match).
     * @param [search] A search term.
     */
    public listIntegrations(fields?: string, id?: number, ordering?: string, page?: number, pageSize?: number, platform?: string, scope?: string, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedIntegrationListResponseList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listIntegrations(fields, id, ordering, page, pageSize, platform, scope, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve repositories for a specific integration.
     * List integration repositories.
     * @param integrationId Unique identifier of the integration
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listRepositoriesWithHttpInfo(integrationId: number, fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedRepositoryListResponseList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listRepositoriesWithHttpInfo(integrationId, fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve repositories for a specific integration.
     * List integration repositories.
     * @param integrationId Unique identifier of the integration
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listRepositories(integrationId: number, fields?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedRepositoryListResponseList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listRepositories(integrationId, fields, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific account integration.
     * Retrieve details from a integration
     * @param integrationId Unique identifier of the integration
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveIntegrationWithHttpInfo(integrationId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<IntegrationResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveIntegrationWithHttpInfo(integrationId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific account integration.
     * Retrieve details from a integration
     * @param integrationId Unique identifier of the integration
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveIntegration(integrationId: string, fields?: string, _options?: PromiseConfigurationOptions): Promise<IntegrationResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveIntegration(integrationId, fields, observableOptions);
        return result.toPromise();
    }


}



import { ObservableVCSProvidersApi } from './ObservableAPI';

import { VCSProvidersApiRequestFactory, VCSProvidersApiResponseProcessor} from "../apis/VCSProvidersApi";
export class PromiseVCSProvidersApi {
    private api: ObservableVCSProvidersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VCSProvidersApiRequestFactory,
        responseProcessor?: VCSProvidersApiResponseProcessor
    ) {
        this.api = new ObservableVCSProvidersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all providers.
     * List providers
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listProvidersWithHttpInfo(fields?: string, id?: number, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedPlatformListResponseList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listProvidersWithHttpInfo(fields, id, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all providers.
     * List providers
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listProviders(fields?: string, id?: number, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedPlatformListResponseList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listProviders(fields, id, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }


}



import { ObservableWAFVersionsApi } from './ObservableAPI';

import { WAFVersionsApiRequestFactory, WAFVersionsApiResponseProcessor} from "../apis/WAFVersionsApi";
export class PromiseWAFVersionsApi {
    private api: ObservableWAFVersionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WAFVersionsApiRequestFactory,
        responseProcessor?: WAFVersionsApiResponseProcessor
    ) {
        this.api = new ObservableWAFVersionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a ready version.
     * Archive a WAF version
     * @param versionId The identifier of the version.
     * @param wafId The ID of the WAF resource.
     * @param [versionArchiveRequest]
     */
    public archiveWafVersionWithHttpInfo(versionId: string, wafId: number, versionArchiveRequest?: VersionArchiveRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.archiveWafVersionWithHttpInfo(versionId, wafId, versionArchiveRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Archive a ready version.
     * Archive a WAF version
     * @param versionId The identifier of the version.
     * @param wafId The ID of the WAF resource.
     * @param [versionArchiveRequest]
     */
    public archiveWafVersion(versionId: string, wafId: number, versionArchiveRequest?: VersionArchiveRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.archiveWafVersion(versionId, wafId, versionArchiveRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build a WAF version
     * @param versionId The identifier of the version.
     * @param wafId The ID of the WAF resource.
     * @param [versionBuildRequest]
     */
    public buildWafVersionWithHttpInfo(versionId: string, wafId: number, versionBuildRequest?: VersionBuildRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.buildWafVersionWithHttpInfo(versionId, wafId, versionBuildRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Trigger a build for a draft version.
     * Build a WAF version
     * @param versionId The identifier of the version.
     * @param wafId The ID of the WAF resource.
     * @param [versionBuildRequest]
     */
    public buildWafVersion(versionId: string, wafId: number, versionBuildRequest?: VersionBuildRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.buildWafVersion(versionId, wafId, versionBuildRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel a WAF version build
     * @param versionId The identifier of the version.
     * @param wafId The ID of the WAF resource.
     * @param [versionCancelRequest]
     */
    public cancelWafVersionBuildWithHttpInfo(versionId: string, wafId: number, versionCancelRequest?: VersionCancelRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cancelWafVersionBuildWithHttpInfo(versionId, wafId, versionCancelRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Cancel a queued or building version.
     * Cancel a WAF version build
     * @param versionId The identifier of the version.
     * @param wafId The ID of the WAF resource.
     * @param [versionCancelRequest]
     */
    public cancelWafVersionBuild(versionId: string, wafId: number, versionCancelRequest?: VersionCancelRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cancelWafVersionBuild(versionId, wafId, versionCancelRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new version by cloning.
     * Create a new WAF version
     * @param wafId The ID of the WAF resource.
     * @param [versionCreateRequest]
     */
    public createWafVersionWithHttpInfo(wafId: number, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createWafVersionWithHttpInfo(wafId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new version by cloning.
     * Create a new WAF version
     * @param wafId The ID of the WAF resource.
     * @param [versionCreateRequest]
     */
    public createWafVersion(wafId: number, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createWafVersion(wafId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific version.
     * Delete a WAF version
     * @param versionId The identifier of the version.
     * @param wafId The ID of the WAF resource.
     */
    public deleteWafVersionWithHttpInfo(versionId: string, wafId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteWafVersionWithHttpInfo(versionId, wafId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific version.
     * Delete a WAF version
     * @param versionId The identifier of the version.
     * @param wafId The ID of the WAF resource.
     */
    public deleteWafVersion(versionId: string, wafId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteWafVersion(versionId, wafId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all versions of a specific WAF.
     * List WAF versions
     * @param wafId The ID of the WAF resource.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public listWafVersionsWithHttpInfo(wafId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWafVersionsWithHttpInfo(wafId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * List all versions of a specific WAF.
     * List WAF versions
     * @param wafId The ID of the WAF resource.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public listWafVersions(wafId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWafVersions(wafId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially update a draft version.
     * Partially update a WAF version
     * @param versionId The identifier of the version.
     * @param wafId The ID of the WAF resource.
     * @param [patchedVersionCreateRequest]
     */
    public partialUpdateWafVersionWithHttpInfo(versionId: string, wafId: number, patchedVersionCreateRequest?: PatchedVersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateWafVersionWithHttpInfo(versionId, wafId, patchedVersionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially update a draft version.
     * Partially update a WAF version
     * @param versionId The identifier of the version.
     * @param wafId The ID of the WAF resource.
     * @param [patchedVersionCreateRequest]
     */
    public partialUpdateWafVersion(versionId: string, wafId: number, patchedVersionCreateRequest?: PatchedVersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateWafVersion(versionId, wafId, patchedVersionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific version.
     * Retrieve a WAF version
     * @param versionId The identifier of the version.
     * @param wafId The ID of the WAF resource.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveWafVersionWithHttpInfo(versionId: string, wafId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveWafVersionWithHttpInfo(versionId, wafId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific version.
     * Retrieve a WAF version
     * @param versionId The identifier of the version.
     * @param wafId The ID of the WAF resource.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveWafVersion(versionId: string, wafId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveWafVersion(versionId, wafId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a draft version.
     * Update a WAF version
     * @param versionId The identifier of the version.
     * @param wafId The ID of the WAF resource.
     * @param [versionCreateRequest]
     */
    public updateWafVersionWithHttpInfo(versionId: string, wafId: number, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWafVersionWithHttpInfo(versionId, wafId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a draft version.
     * Update a WAF version
     * @param versionId The identifier of the version.
     * @param wafId The ID of the WAF resource.
     * @param [versionCreateRequest]
     */
    public updateWafVersion(versionId: string, wafId: number, versionCreateRequest?: VersionCreateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWafVersion(versionId, wafId, versionCreateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableWAFsApi } from './ObservableAPI';

import { WAFsApiRequestFactory, WAFsApiResponseProcessor} from "../apis/WAFsApi";
export class PromiseWAFsApi {
    private api: ObservableWAFsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WAFsApiRequestFactory,
        responseProcessor?: WAFsApiResponseProcessor
    ) {
        this.api = new ObservableWAFsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new WAF by performing a deep copy of an existing WAF, including its Exceptions.
     * Clone a Web Application Firewall (WAF)
     * @param wafId A unique integer value identifying the WAF.
     * @param cloneWAFRequest
     */
    public cloneWafWithHttpInfo(wafId: number, cloneWAFRequest: CloneWAFRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WAFResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cloneWafWithHttpInfo(wafId, cloneWAFRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new WAF by performing a deep copy of an existing WAF, including its Exceptions.
     * Clone a Web Application Firewall (WAF)
     * @param wafId A unique integer value identifying the WAF.
     * @param cloneWAFRequest
     */
    public cloneWaf(wafId: number, cloneWAFRequest: CloneWAFRequest, _options?: PromiseConfigurationOptions): Promise<WAFResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cloneWaf(wafId, cloneWAFRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new WAF for your account.
     * Create a Web Application Firewall (WAF)
     * @param wAFRequest
     */
    public createWafWithHttpInfo(wAFRequest: WAFRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WAFResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createWafWithHttpInfo(wAFRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new WAF for your account.
     * Create a Web Application Firewall (WAF)
     * @param wAFRequest
     */
    public createWaf(wAFRequest: WAFRequest, _options?: PromiseConfigurationOptions): Promise<WAFResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createWaf(wAFRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific WAF in your account.
     * Delete a Web Application Firewall (WAF)
     * @param wafId A unique integer value identifying the WAF.
     */
    public deleteWafWithHttpInfo(wafId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteWafWithHttpInfo(wafId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific WAF in your account.
     * Delete a Web Application Firewall (WAF)
     * @param wafId A unique integer value identifying the WAF.
     */
    public deleteWaf(wafId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteWaf(wafId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all WAFs owned by your account.
     * List Web Application Firewalls (WAFs)
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listWafsWithHttpInfo(fields?: string, id?: number, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedWAFList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWafsWithHttpInfo(fields, id, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all WAFs owned by your account.
     * List Web Application Firewalls (WAFs)
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listWafs(fields?: string, id?: number, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedWAFList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWafs(fields, id, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing WAF without affecting other fields.
     * Partially update a Web Application Firewall (WAF)
     * @param wafId A unique integer value identifying the WAF.
     * @param [patchedWAFRequest]
     */
    public partialUpdateWafWithHttpInfo(wafId: number, patchedWAFRequest?: PatchedWAFRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WAFResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateWafWithHttpInfo(wafId, patchedWAFRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing WAF without affecting other fields.
     * Partially update a Web Application Firewall (WAF)
     * @param wafId A unique integer value identifying the WAF.
     * @param [patchedWAFRequest]
     */
    public partialUpdateWaf(wafId: number, patchedWAFRequest?: PatchedWAFRequest, _options?: PromiseConfigurationOptions): Promise<WAFResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateWaf(wafId, patchedWAFRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific WAF in your account.
     * Retrieve details from a Web Application Firewall (WAF)
     * @param wafId A unique integer value identifying the WAF.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveWafWithHttpInfo(wafId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WAFResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveWafWithHttpInfo(wafId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details from a specific WAF in your account.
     * Retrieve details from a Web Application Firewall (WAF)
     * @param wafId A unique integer value identifying the WAF.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveWaf(wafId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<WAFResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveWaf(wafId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing WAF. This replaces the entire WAF with the new data provided.
     * Update a Web Application Firewall (WAF)
     * @param wafId A unique integer value identifying the WAF.
     * @param wAFRequest
     */
    public updateWafWithHttpInfo(wafId: number, wAFRequest: WAFRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WAFResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWafWithHttpInfo(wafId, wAFRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing WAF. This replaces the entire WAF with the new data provided.
     * Update a Web Application Firewall (WAF)
     * @param wafId A unique integer value identifying the WAF.
     * @param wAFRequest
     */
    public updateWaf(wafId: number, wAFRequest: WAFRequest, _options?: PromiseConfigurationOptions): Promise<WAFResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWaf(wafId, wAFRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableWAFsExceptionsApi } from './ObservableAPI';

import { WAFsExceptionsApiRequestFactory, WAFsExceptionsApiResponseProcessor} from "../apis/WAFsExceptionsApi";
export class PromiseWAFsExceptionsApi {
    private api: ObservableWAFsExceptionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WAFsExceptionsApiRequestFactory,
        responseProcessor?: WAFsExceptionsApiResponseProcessor
    ) {
        this.api = new ObservableWAFsExceptionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Exception for a specific WAF in your account.
     * Create an Exception for a Web Application Firewall (WAF)
     * @param wafId A unique integer value identifying the WAF.
     * @param wAFRuleRequest
     */
    public createWafExceptionWithHttpInfo(wafId: number, wAFRuleRequest: WAFRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WAFRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createWafExceptionWithHttpInfo(wafId, wAFRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Exception for a specific WAF in your account.
     * Create an Exception for a Web Application Firewall (WAF)
     * @param wafId A unique integer value identifying the WAF.
     * @param wAFRuleRequest
     */
    public createWafException(wafId: number, wAFRuleRequest: WAFRuleRequest, _options?: PromiseConfigurationOptions): Promise<WAFRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createWafException(wafId, wAFRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Exception for a specific WAF in your account.
     * Create an Exception for a Web Application Firewall (WAF)
     * @param versionId The ULID identifier of the version.
     * @param wafId A unique integer value identifying the WAF.
     * @param wAFRuleRequest
     */
    public createWafException2WithHttpInfo(versionId: string, wafId: number, wAFRuleRequest: WAFRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WAFRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createWafException2WithHttpInfo(versionId, wafId, wAFRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Exception for a specific WAF in your account.
     * Create an Exception for a Web Application Firewall (WAF)
     * @param versionId The ULID identifier of the version.
     * @param wafId A unique integer value identifying the WAF.
     * @param wAFRuleRequest
     */
    public createWafException2(versionId: string, wafId: number, wAFRuleRequest: WAFRuleRequest, _options?: PromiseConfigurationOptions): Promise<WAFRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createWafException2(versionId, wafId, wAFRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove a specific Exception from a WAF in your account.
     * Delete an Exception from a Web Application Firewall (WAF)
     * @param exceptionId A unique integer value identifying the WAF exception.
     * @param wafId A unique integer value identifying the WAF.
     */
    public deleteWafExceptionWithHttpInfo(exceptionId: number, wafId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteWafExceptionWithHttpInfo(exceptionId, wafId, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove a specific Exception from a WAF in your account.
     * Delete an Exception from a Web Application Firewall (WAF)
     * @param exceptionId A unique integer value identifying the WAF exception.
     * @param wafId A unique integer value identifying the WAF.
     */
    public deleteWafException(exceptionId: number, wafId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteWafException(exceptionId, wafId, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove a specific Exception from a WAF in your account.
     * Delete an Exception from a Web Application Firewall (WAF)
     * @param exceptionId A unique integer value identifying the WAF exception.
     * @param versionId The ULID identifier of the version.
     * @param wafId A unique integer value identifying the WAF.
     */
    public deleteWafException2WithHttpInfo(exceptionId: number, versionId: string, wafId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteWafException2WithHttpInfo(exceptionId, versionId, wafId, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove a specific Exception from a WAF in your account.
     * Delete an Exception from a Web Application Firewall (WAF)
     * @param exceptionId A unique integer value identifying the WAF exception.
     * @param versionId The ULID identifier of the version.
     * @param wafId A unique integer value identifying the WAF.
     */
    public deleteWafException2(exceptionId: number, versionId: string, wafId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteWafException2(exceptionId, versionId, wafId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Exceptions associated with a specific WAF owned by your account.
     * List Exceptions for a Web Application Firewall (WAF)
     * @param wafId A unique integer value identifying the WAF.
     * @param [createdAtGte] Filter by creation date (greater than or equal).
     * @param [createdAtLte] Filter by creation date (less than or equal).
     * @param [description] Filter by description (case-insensitive, partial match).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [path] Filter by path (case-insensitive, partial match).
     * @param [search] A search term.
     */
    public listWafExceptionsWithHttpInfo(wafId: number, createdAtGte?: Date, createdAtLte?: Date, description?: string, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, ordering?: string, page?: number, pageSize?: number, path?: string, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedWAFRuleList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWafExceptionsWithHttpInfo(wafId, createdAtGte, createdAtLte, description, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, ordering, page, pageSize, path, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Exceptions associated with a specific WAF owned by your account.
     * List Exceptions for a Web Application Firewall (WAF)
     * @param wafId A unique integer value identifying the WAF.
     * @param [createdAtGte] Filter by creation date (greater than or equal).
     * @param [createdAtLte] Filter by creation date (less than or equal).
     * @param [description] Filter by description (case-insensitive, partial match).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [path] Filter by path (case-insensitive, partial match).
     * @param [search] A search term.
     */
    public listWafExceptions(wafId: number, createdAtGte?: Date, createdAtLte?: Date, description?: string, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, ordering?: string, page?: number, pageSize?: number, path?: string, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedWAFRuleList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWafExceptions(wafId, createdAtGte, createdAtLte, description, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, ordering, page, pageSize, path, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Exceptions associated with a specific WAF owned by your account.
     * List Exceptions for a Web Application Firewall (WAF)
     * @param versionId The ULID identifier of the version.
     * @param wafId A unique integer value identifying the WAF.
     * @param [createdAtGte] Filter by creation date (greater than or equal).
     * @param [createdAtLte] Filter by creation date (less than or equal).
     * @param [description] Filter by description (case-insensitive, partial match).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [path] Filter by path (case-insensitive, partial match).
     * @param [search] A search term.
     */
    public listWafExceptions2WithHttpInfo(versionId: string, wafId: number, createdAtGte?: Date, createdAtLte?: Date, description?: string, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, ordering?: string, page?: number, pageSize?: number, path?: string, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedWAFRuleList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWafExceptions2WithHttpInfo(versionId, wafId, createdAtGte, createdAtLte, description, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, ordering, page, pageSize, path, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Exceptions associated with a specific WAF owned by your account.
     * List Exceptions for a Web Application Firewall (WAF)
     * @param versionId The ULID identifier of the version.
     * @param wafId A unique integer value identifying the WAF.
     * @param [createdAtGte] Filter by creation date (greater than or equal).
     * @param [createdAtLte] Filter by creation date (less than or equal).
     * @param [description] Filter by description (case-insensitive, partial match).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [path] Filter by path (case-insensitive, partial match).
     * @param [search] A search term.
     */
    public listWafExceptions2(versionId: string, wafId: number, createdAtGte?: Date, createdAtLte?: Date, description?: string, fields?: string, id?: number, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, ordering?: string, page?: number, pageSize?: number, path?: string, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedWAFRuleList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWafExceptions2(versionId, wafId, createdAtGte, createdAtLte, description, fields, id, lastEditor, lastModifiedGte, lastModifiedLte, ordering, page, pageSize, path, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing exception for a WAF without affecting other fields.
     * Partially update an Exception for a Web Application Firewall (WAF)
     * @param exceptionId A unique integer value identifying the WAF exception.
     * @param wafId A unique integer value identifying the WAF.
     * @param [patchedWAFRuleRequest]
     */
    public partialUpdateWafExceptionWithHttpInfo(exceptionId: number, wafId: number, patchedWAFRuleRequest?: PatchedWAFRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WAFRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateWafExceptionWithHttpInfo(exceptionId, wafId, patchedWAFRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing exception for a WAF without affecting other fields.
     * Partially update an Exception for a Web Application Firewall (WAF)
     * @param exceptionId A unique integer value identifying the WAF exception.
     * @param wafId A unique integer value identifying the WAF.
     * @param [patchedWAFRuleRequest]
     */
    public partialUpdateWafException(exceptionId: number, wafId: number, patchedWAFRuleRequest?: PatchedWAFRuleRequest, _options?: PromiseConfigurationOptions): Promise<WAFRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateWafException(exceptionId, wafId, patchedWAFRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing exception for a WAF without affecting other fields.
     * Partially update an Exception for a Web Application Firewall (WAF)
     * @param exceptionId A unique integer value identifying the WAF exception.
     * @param versionId The ULID identifier of the version.
     * @param wafId A unique integer value identifying the WAF.
     * @param [patchedWAFRuleRequest]
     */
    public partialUpdateWafException2WithHttpInfo(exceptionId: number, versionId: string, wafId: number, patchedWAFRuleRequest?: PatchedWAFRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WAFRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateWafException2WithHttpInfo(exceptionId, versionId, wafId, patchedWAFRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing exception for a WAF without affecting other fields.
     * Partially update an Exception for a Web Application Firewall (WAF)
     * @param exceptionId A unique integer value identifying the WAF exception.
     * @param versionId The ULID identifier of the version.
     * @param wafId A unique integer value identifying the WAF.
     * @param [patchedWAFRuleRequest]
     */
    public partialUpdateWafException2(exceptionId: number, versionId: string, wafId: number, patchedWAFRuleRequest?: PatchedWAFRuleRequest, _options?: PromiseConfigurationOptions): Promise<WAFRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateWafException2(exceptionId, versionId, wafId, patchedWAFRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Exception from a WAF in your account.
     * Retrieve details of an Exception from a Web Application Firewall (WAF)
     * @param exceptionId A unique integer value identifying the WAF exception.
     * @param wafId A unique integer value identifying the WAF.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveWafExceptionWithHttpInfo(exceptionId: number, wafId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WAFRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveWafExceptionWithHttpInfo(exceptionId, wafId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Exception from a WAF in your account.
     * Retrieve details of an Exception from a Web Application Firewall (WAF)
     * @param exceptionId A unique integer value identifying the WAF exception.
     * @param wafId A unique integer value identifying the WAF.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveWafException(exceptionId: number, wafId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<WAFRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveWafException(exceptionId, wafId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Exception from a WAF in your account.
     * Retrieve details of an Exception from a Web Application Firewall (WAF)
     * @param exceptionId A unique integer value identifying the WAF exception.
     * @param versionId The ULID identifier of the version.
     * @param wafId A unique integer value identifying the WAF.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveWafException2WithHttpInfo(exceptionId: number, versionId: string, wafId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WAFRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveWafException2WithHttpInfo(exceptionId, versionId, wafId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Exception from a WAF in your account.
     * Retrieve details of an Exception from a Web Application Firewall (WAF)
     * @param exceptionId A unique integer value identifying the WAF exception.
     * @param versionId The ULID identifier of the version.
     * @param wafId A unique integer value identifying the WAF.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveWafException2(exceptionId: number, versionId: string, wafId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<WAFRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveWafException2(exceptionId, versionId, wafId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Exception for a WAF. This replaces the entire rule with the new data provided.
     * Update an Exception for a Web Application Firewall (WAF)
     * @param exceptionId A unique integer value identifying the WAF exception.
     * @param wafId A unique integer value identifying the WAF.
     * @param wAFRuleRequest
     */
    public updateWafExceptionWithHttpInfo(exceptionId: number, wafId: number, wAFRuleRequest: WAFRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WAFRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWafExceptionWithHttpInfo(exceptionId, wafId, wAFRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Exception for a WAF. This replaces the entire rule with the new data provided.
     * Update an Exception for a Web Application Firewall (WAF)
     * @param exceptionId A unique integer value identifying the WAF exception.
     * @param wafId A unique integer value identifying the WAF.
     * @param wAFRuleRequest
     */
    public updateWafException(exceptionId: number, wafId: number, wAFRuleRequest: WAFRuleRequest, _options?: PromiseConfigurationOptions): Promise<WAFRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWafException(exceptionId, wafId, wAFRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Exception for a WAF. This replaces the entire rule with the new data provided.
     * Update an Exception for a Web Application Firewall (WAF)
     * @param exceptionId A unique integer value identifying the WAF exception.
     * @param versionId The ULID identifier of the version.
     * @param wafId A unique integer value identifying the WAF.
     * @param wAFRuleRequest
     */
    public updateWafException2WithHttpInfo(exceptionId: number, versionId: string, wafId: number, wAFRuleRequest: WAFRuleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WAFRuleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWafException2WithHttpInfo(exceptionId, versionId, wafId, wAFRuleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Exception for a WAF. This replaces the entire rule with the new data provided.
     * Update an Exception for a Web Application Firewall (WAF)
     * @param exceptionId A unique integer value identifying the WAF exception.
     * @param versionId The ULID identifier of the version.
     * @param wafId A unique integer value identifying the WAF.
     * @param wAFRuleRequest
     */
    public updateWafException2(exceptionId: number, versionId: string, wafId: number, wAFRuleRequest: WAFRuleRequest, _options?: PromiseConfigurationOptions): Promise<WAFRuleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWafException2(exceptionId, versionId, wafId, wAFRuleRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableWorkloadDeploymentsApi } from './ObservableAPI';

import { WorkloadDeploymentsApiRequestFactory, WorkloadDeploymentsApiResponseProcessor} from "../apis/WorkloadDeploymentsApi";
export class PromiseWorkloadDeploymentsApi {
    private api: ObservableWorkloadDeploymentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WorkloadDeploymentsApiRequestFactory,
        responseProcessor?: WorkloadDeploymentsApiResponseProcessor
    ) {
        this.api = new ObservableWorkloadDeploymentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Workload Deployment in your account.
     * Create a Workload Deployment
     * @param workloadId A unique integer value identifying the workload.
     * @param workloadDeploymentRequest
     */
    public createWorkloadDeploymentWithHttpInfo(workloadId: number, workloadDeploymentRequest: WorkloadDeploymentRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WorkloadDeploymentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createWorkloadDeploymentWithHttpInfo(workloadId, workloadDeploymentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Workload Deployment in your account.
     * Create a Workload Deployment
     * @param workloadId A unique integer value identifying the workload.
     * @param workloadDeploymentRequest
     */
    public createWorkloadDeployment(workloadId: number, workloadDeploymentRequest: WorkloadDeploymentRequest, _options?: PromiseConfigurationOptions): Promise<WorkloadDeploymentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createWorkloadDeployment(workloadId, workloadDeploymentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Workload Deployment in your account.
     * Delete a Workload Deployment
     * @param deploymentId A unique integer value identifying the deployment.
     * @param workloadId A unique integer value identifying the workload.
     */
    public deleteWorkloadDeploymentWithHttpInfo(deploymentId: number, workloadId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteWorkloadDeploymentWithHttpInfo(deploymentId, workloadId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Workload Deployment in your account.
     * Delete a Workload Deployment
     * @param deploymentId A unique integer value identifying the deployment.
     * @param workloadId A unique integer value identifying the workload.
     */
    public deleteWorkloadDeployment(deploymentId: number, workloadId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteWorkloadDeployment(deploymentId, workloadId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Workload Deployments related to your account\'s Workloads.
     * List Workload Deployments
     * @param workloadId A unique integer value identifying the workload.
     * @param [current] Filter by current status.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     * @param [tag] Filter by tag (case-insensitive, partial match).
     */
    public listWorkloadDeploymentsWithHttpInfo(workloadId: number, current?: boolean, fields?: string, id?: number, ordering?: string, page?: number, pageSize?: number, search?: string, tag?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedWorkloadDeploymentList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWorkloadDeploymentsWithHttpInfo(workloadId, current, fields, id, ordering, page, pageSize, search, tag, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Workload Deployments related to your account\'s Workloads.
     * List Workload Deployments
     * @param workloadId A unique integer value identifying the workload.
     * @param [current] Filter by current status.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     * @param [tag] Filter by tag (case-insensitive, partial match).
     */
    public listWorkloadDeployments(workloadId: number, current?: boolean, fields?: string, id?: number, ordering?: string, page?: number, pageSize?: number, search?: string, tag?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedWorkloadDeploymentList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWorkloadDeployments(workloadId, current, fields, id, ordering, page, pageSize, search, tag, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Workload Deployment without affecting other fields.
     * Partially update a Workload Deployment
     * @param deploymentId A unique integer value identifying the deployment.
     * @param workloadId A unique integer value identifying the workload.
     * @param [patchedWorkloadDeploymentRequest]
     */
    public partialUpdateWorkloadDeploymentWithHttpInfo(deploymentId: number, workloadId: number, patchedWorkloadDeploymentRequest?: PatchedWorkloadDeploymentRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WorkloadDeploymentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateWorkloadDeploymentWithHttpInfo(deploymentId, workloadId, patchedWorkloadDeploymentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Workload Deployment without affecting other fields.
     * Partially update a Workload Deployment
     * @param deploymentId A unique integer value identifying the deployment.
     * @param workloadId A unique integer value identifying the workload.
     * @param [patchedWorkloadDeploymentRequest]
     */
    public partialUpdateWorkloadDeployment(deploymentId: number, workloadId: number, patchedWorkloadDeploymentRequest?: PatchedWorkloadDeploymentRequest, _options?: PromiseConfigurationOptions): Promise<WorkloadDeploymentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateWorkloadDeployment(deploymentId, workloadId, patchedWorkloadDeploymentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Workload Deployment in your account.
     * Retrieve details of a Workload Deployment
     * @param deploymentId A unique integer value identifying the deployment.
     * @param workloadId A unique integer value identifying the workload.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveWorkloadDeploymentWithHttpInfo(deploymentId: number, workloadId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WorkloadDeploymentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveWorkloadDeploymentWithHttpInfo(deploymentId, workloadId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Workload Deployment in your account.
     * Retrieve details of a Workload Deployment
     * @param deploymentId A unique integer value identifying the deployment.
     * @param workloadId A unique integer value identifying the workload.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveWorkloadDeployment(deploymentId: number, workloadId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<WorkloadDeploymentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveWorkloadDeployment(deploymentId, workloadId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Workload Deployment. This replaces the entire Workload Deployment with the new data provided.
     * Update a Workload Deployment
     * @param deploymentId A unique integer value identifying the deployment.
     * @param workloadId A unique integer value identifying the workload.
     * @param workloadDeploymentRequest
     */
    public updateWorkloadDeploymentWithHttpInfo(deploymentId: number, workloadId: number, workloadDeploymentRequest: WorkloadDeploymentRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WorkloadDeploymentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWorkloadDeploymentWithHttpInfo(deploymentId, workloadId, workloadDeploymentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Workload Deployment. This replaces the entire Workload Deployment with the new data provided.
     * Update a Workload Deployment
     * @param deploymentId A unique integer value identifying the deployment.
     * @param workloadId A unique integer value identifying the workload.
     * @param workloadDeploymentRequest
     */
    public updateWorkloadDeployment(deploymentId: number, workloadId: number, workloadDeploymentRequest: WorkloadDeploymentRequest, _options?: PromiseConfigurationOptions): Promise<WorkloadDeploymentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWorkloadDeployment(deploymentId, workloadId, workloadDeploymentRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableWorkloadsApi } from './ObservableAPI';

import { WorkloadsApiRequestFactory, WorkloadsApiResponseProcessor} from "../apis/WorkloadsApi";
export class PromiseWorkloadsApi {
    private api: ObservableWorkloadsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WorkloadsApiRequestFactory,
        responseProcessor?: WorkloadsApiResponseProcessor
    ) {
        this.api = new ObservableWorkloadsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Workload in your account.
     * Create an Workload
     * @param workloadRequest
     */
    public createWorkloadWithHttpInfo(workloadRequest: WorkloadRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WorkloadResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createWorkloadWithHttpInfo(workloadRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Workload in your account.
     * Create an Workload
     * @param workloadRequest
     */
    public createWorkload(workloadRequest: WorkloadRequest, _options?: PromiseConfigurationOptions): Promise<WorkloadResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createWorkload(workloadRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Workload in your account.
     * Delete an Workload
     * @param workloadId A unique integer value identifying the workload.
     */
    public deleteWorkloadWithHttpInfo(workloadId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteWorkloadWithHttpInfo(workloadId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific Workload in your account.
     * Delete an Workload
     * @param workloadId A unique integer value identifying the workload.
     */
    public deleteWorkload(workloadId: number, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteWorkload(workloadId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Workloads owned by your account.
     * List Workloads
     * @param [active] Filter by active status.
     * @param [digitalCertificateId] Filter by digital certificate id (accepts comma-separated values).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [infrastructure] Filter by infrastructure (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [mapName] Filter by map name (case-insensitive, partial match).
     * @param [mtlsTrustedCaCertificateId] Filter by mTLS trusted CA certificate id (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listWorkloadsWithHttpInfo(active?: boolean, digitalCertificateId?: number, fields?: string, id?: number, infrastructure?: string, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, mapName?: string, mtlsTrustedCaCertificateId?: number, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedWorkloadList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWorkloadsWithHttpInfo(active, digitalCertificateId, fields, id, infrastructure, lastEditor, lastModifiedGte, lastModifiedLte, mapName, mtlsTrustedCaCertificateId, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * List all Workloads owned by your account.
     * List Workloads
     * @param [active] Filter by active status.
     * @param [digitalCertificateId] Filter by digital certificate id (accepts comma-separated values).
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     * @param [id] Filter by id (accepts comma-separated values).
     * @param [infrastructure] Filter by infrastructure (accepts comma-separated values).
     * @param [lastEditor] Filter by last editor (case-insensitive, partial match).
     * @param [lastModifiedGte] Filter by last modified date (greater than or equal).
     * @param [lastModifiedLte] Filter by last modified date (less than or equal).
     * @param [mapName] Filter by map name (case-insensitive, partial match).
     * @param [mtlsTrustedCaCertificateId] Filter by mTLS trusted CA certificate id (accepts comma-separated values).
     * @param [name] Filter by name (case-insensitive, partial match).
     * @param [ordering] Which field to use when ordering the results.
     * @param [page] A page number within the paginated result set.
     * @param [pageSize] A numeric value that indicates the number of items per page.
     * @param [search] A search term.
     */
    public listWorkloads(active?: boolean, digitalCertificateId?: number, fields?: string, id?: number, infrastructure?: string, lastEditor?: string, lastModifiedGte?: Date, lastModifiedLte?: Date, mapName?: string, mtlsTrustedCaCertificateId?: number, name?: string, ordering?: string, page?: number, pageSize?: number, search?: string, _options?: PromiseConfigurationOptions): Promise<PaginatedWorkloadList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWorkloads(active, digitalCertificateId, fields, id, infrastructure, lastEditor, lastModifiedGte, lastModifiedLte, mapName, mtlsTrustedCaCertificateId, name, ordering, page, pageSize, search, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Workload without affecting other fields.
     * Partially update an Workload
     * @param workloadId A unique integer value identifying the workload.
     * @param [patchedWorkloadRequest]
     */
    public partialUpdateWorkloadWithHttpInfo(workloadId: number, patchedWorkloadRequest?: PatchedWorkloadRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WorkloadResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateWorkloadWithHttpInfo(workloadId, patchedWorkloadRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update one or more fields of an existing Workload without affecting other fields.
     * Partially update an Workload
     * @param workloadId A unique integer value identifying the workload.
     * @param [patchedWorkloadRequest]
     */
    public partialUpdateWorkload(workloadId: number, patchedWorkloadRequest?: PatchedWorkloadRequest, _options?: PromiseConfigurationOptions): Promise<WorkloadResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.partialUpdateWorkload(workloadId, patchedWorkloadRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Workload in your account.
     * Retrieve details of an Workload
     * @param workloadId A unique integer value identifying the workload.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveWorkloadWithHttpInfo(workloadId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WorkloadResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveWorkloadWithHttpInfo(workloadId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific Workload in your account.
     * Retrieve details of an Workload
     * @param workloadId A unique integer value identifying the workload.
     * @param [fields] Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation.
     */
    public retrieveWorkload(workloadId: number, fields?: string, _options?: PromiseConfigurationOptions): Promise<WorkloadResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveWorkload(workloadId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Workload. This replaces the entire Workload with the new data provided.
     * Update an Workload
     * @param workloadId A unique integer value identifying the workload.
     * @param workloadRequest
     */
    public updateWorkloadWithHttpInfo(workloadId: number, workloadRequest: WorkloadRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WorkloadResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWorkloadWithHttpInfo(workloadId, workloadRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing Workload. This replaces the entire Workload with the new data provided.
     * Update an Workload
     * @param workloadId A unique integer value identifying the workload.
     * @param workloadRequest
     */
    public updateWorkload(workloadId: number, workloadRequest: WorkloadRequest, _options?: PromiseConfigurationOptions): Promise<WorkloadResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWorkload(workloadId, workloadRequest, observableOptions);
        return result.toPromise();
    }


}



